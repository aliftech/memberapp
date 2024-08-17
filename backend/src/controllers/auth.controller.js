const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createResponse = require('../utils/helper/response.helper');
const db = require('../models');
const User = db.User;
const RefreshToken = db.RefreshToken;

const signup = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Convert the errors array into a single string
            const errorMessages = errors.array().map(error => error.msg).join(', ');
            return res.status(400).json(createResponse.error(errorMessages));
        }

        // Extract validated email from the request
        const { firstname, lastname, email, membership_type, password } = req.body;

        // Hash the password
        const saltRounds = 10; // Number of salt rounds (cost factor)
        const hashedPassword = await bcrypt.hash(password, saltRounds);


        // Check if the email already exists
        const existingUser = await User.findOne({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return res.status(400).json(createResponse.error('Email is already used'));
        }

        // Proceed with signup logic, e.g., creating a new user
        User.create({
            first_name: firstname,
            last_name: lastname,
            email: email,
            membership_type: membership_type,
            password: hashedPassword,
        })
        return res.status(201).json(createResponse.success('Your account have been created'));

    } catch (error) {
        return res.status(500).json(createResponse.error('Server error', error.message));
    }
}

const signin = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Convert the errors array into a single string
            const errorMessages = errors.array().map(error => error.msg).join(', ');
            return res.status(400).json(createResponse.error(errorMessages));
        }

        const { email, password } = req.body;
        const user = await User.findOne({ 
            where: {
                email: email
            }
        });

        if (!user) return res.status(404).json(createResponse.error('User not found'));
        
        const comparePass = await bcrypt.compare(password, user.password);
        if (!comparePass) return res.status(401).json(createResponse.error('Wrong password'));

        const accessToken = jwt.sign({ id: user.id, username: user.email }, process.env.ACCESS_TOKEN, {
            expiresIn: '1m'
        });

        const refreshToken = jwt.sign({ id: user.id, username: user.email }, process.env.ACCESS_TOKEN, {
            expiresIn: '1d'
        });

        if (accessToken && refreshToken) {
            // Check refresh token data based on user_id
            let token = await RefreshToken.findOne({
                where: {
                    user_id: user.id
                }
            });

            const expirationTime = new Date();
            expirationTime.setDate(expirationTime.getDate() + 1);

            if (token) {
                // Update refresh_token data
                await RefreshToken.update(
                    {
                        refresh_token: refreshToken, // Assuming you have a new refresh token generated
                        expiredAt: expirationTime,
                        updatedAt: new Date()
                    },
                    {
                        where: {
                            user_id: user.id // Assuming you are updating based on user_id
                        }
                    }
                );
                
            } else {
                // Store refresh_token data
                await RefreshToken.create({
                    user_id: user.id,
                    refresh_token: refreshToken,
                    expiredAt: expirationTime
                });
            }

            return res.status(200).json(createResponse.success('Login success', { 'access_token': accessToken, 'refresh_token': refreshToken }));
        } else {
            return res.status(400).json(createResponse.error('Failed to generate token. Please try again'));
        }
    } catch (error) {
        console.error('Signin Error:', error); // Log the error for debugging
        return res.status(500).json(createResponse.error('Server error', error.message));
    }
};

const refresh_token = async (req, res) => {
    try {
        const { refresh_token } = req.body;
        if (!refresh_token) {
            return res.status(401).json(createResponse.error('Refresh token is required'));
        }

        jwt.verify(refresh_token, process.env.ACCESS_TOKEN, async (err, user) => {
            if (err) {
                return res.status(403).json(createResponse.error('Invalid refresh token'));
            }

            // Assuming you store refresh tokens in the database, you would need to validate it here
            const storedRefreshToken = await RefreshToken.findOne({ where: { refresh_token: refresh_token } });
            if (!storedRefreshToken) {
                return res.status(403).json(createResponse.error('Refresh token not found'));
            }

            const newAccessToken = jwt.sign({ id: user.id, username: user.email }, process.env.ACCESS_TOKEN, {
                expiresIn: '1m'
            });

            return res.status(200).json(createResponse.success('Token refreshed', { 'access_token': newAccessToken }));
        });
    } catch (error) {
        return res.status(500).json(createResponse.error('Server error', error.message));
    }
}

module.exports = {
    signup,
    signin,
    refresh_token
}
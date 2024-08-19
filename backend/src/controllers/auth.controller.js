const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
const qs = require('querystring');

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

        const accessToken = jwt.sign({ id: user.id, email: user.email }, process.env.ACCESS_TOKEN, {
            expiresIn: '1m'
        });

        const refreshToken = jwt.sign({ id: user.id, email: user.email }, process.env.ACCESS_TOKEN, {
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

const google_auth = async (req, res) => {
    try {
        const { code } = req.body;

        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: qs.stringify({
                    code,
                    client_id: process.env.GOOGLE_CLIENT_ID,
                    client_secret: process.env.GOOGLE_CLIENT_SECRET,
                    redirect_uri: 'http://localhost:3000/auth/google/callback',
                    grant_type: 'authorization_code',
                }),
          });
      
          const tokenData = await tokenResponse.json();
      
          // Use access token to get user info
          const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
                },
          });
      
          const userInfo = await userInfoResponse.json();

        //   Check data email
        const email = userInfo.email;

        const user = await User.findOne({ 
            where: {
                email: email
            }
        });
        
        if (!user) {
            User.create({
                email: email,
            });

            // Get the user data inserted
            const usernew = await User.findOne({ 
                where: {
                    email: email
                }
            });

            if (!usernew) return res.status(404).json(createResponse.error('User not found'));
            const accessToken = jwt.sign({ id: usernew.id, email: usernew.email }, process.env.ACCESS_TOKEN, {
                expiresIn: '1m'
            });
    
            const refreshToken = jwt.sign({ id: usernew.id, email: usernew.email }, process.env.ACCESS_TOKEN, {
                expiresIn: '1d'
            });

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
            return res.status(200).json(createResponse.success('Login success', {'access_token': accessToken, 'refresh_token': refreshToken}));
        } else {
            const accessToken = jwt.sign({ id: user.id, email: user.email }, process.env.ACCESS_TOKEN, {
                expiresIn: '1m'
            });
    
            const refreshToken = jwt.sign({ id: user.id, email: user.email }, process.env.ACCESS_TOKEN, {
                expiresIn: '1d'
            });

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
            return res.status(200).json(createResponse.success('Login success', {'access_token': accessToken, 'refresh_token': refreshToken}));
        }

    } catch (error) {
        console.error('Error during token exchange:', error);
        res.json({ success: false, message: 'Token exchange failed' });
    }

}

const facebook_auth = async (req, res) => {
    try {
        const { code } = req.body;

        const tokenResponse = await fetch('https://graph.facebook.com/v12.0/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify({
                code,
                client_id: process.env.FACEBOOK_CLIENT_ID, // Update to Facebook Client ID
                client_secret: process.env.FACEBOOK_CLIENT_SECRET, // Update to Facebook Client Secret
                redirect_uri: 'http://localhost:3000/auth/facebook/callback', // Facebook redirect URI
                grant_type: 'authorization_code',
            }),
        });

        const tokenData = await tokenResponse.json();

        // Check for errors in the token exchange
        if (!tokenData.access_token) {
            return res.status(400).json({ success: false, message: 'Failed to obtain access token' });
        }

        // Use access token to get user info
        const userInfoResponse = await fetch(`https://graph.facebook.com/me?access_token=${tokenData.access_token}&fields=id,name,email,picture`);
        const userInfo = await userInfoResponse.json();

        if (!userInfo.email) {
            return res.status(400).json({ success: false, message: 'Failed to retrieve user email' });
        }

        const email = userInfo.email;

        let user = await User.findOne({ where: { email } });

        if (!user) {
            // Create a new user if not found
            user = await User.create({
                email,
                // Add more fields as needed
            });
        }

        const accessToken = jwt.sign({ id: user.id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1m',
        });

        const refreshToken = jwt.sign({ id: user.id, email: user.email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d',
        });

        const expirationTime = new Date();
        expirationTime.setDate(expirationTime.getDate() + 1);

        let token = await RefreshToken.findOne({
            where: { user_id: user.id },
        });

        if (token) {
            // Update existing refresh token
            await RefreshToken.update(
                {
                    refresh_token: refreshToken,
                    expiredAt: expirationTime,
                    updatedAt: new Date(),
                },
                { where: { user_id: user.id } }
            );
        } else {
            // Create a new refresh token entry
            await RefreshToken.create({
                user_id: user.id,
                refresh_token: refreshToken,
                expiredAt: expirationTime,
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: { access_token: accessToken, refresh_token: refreshToken },
        });
    } catch (error) {
        console.error('Error during token exchange:', error);
        return res.status(500).json({ success: false, message: 'Token exchange failed' });
    }    
}

module.exports = {
    signup,
    signin,
    refresh_token,
    google_auth,
    facebook_auth
}
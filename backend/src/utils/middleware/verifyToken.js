const jwt = require('jsonwebtoken');
const createResponse = require('../helper/response.helper');

const verifyToken = (req, res, next) => { 
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json(createResponse.error('Unauthorized access'));
    jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => { 
        if (error) return res.status(403).json(createResponse.success('Invalid token'));
        next();
    })
}

module.exports = {
    verifyToken
}

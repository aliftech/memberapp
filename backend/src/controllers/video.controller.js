const jwt = require('jsonwebtoken');

const createResponse = require('../utils/helper/response.helper');
const db = require('../models');
const Video = db.Videos;
const User = db.User;

const getAllVideo = async (req, res) => {
    try {
        // Decode token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
            if (error) {
                return res.status(403).json(createResponse.error('Unauthorized access'));
            }
            return user_id = decoded.id;
        });

        // Get data membership
        user_data = await User.findOne({
            where: {
                id: user_id
            }
        });

        if (!user_data) return res.status(404).json(createResponse('No user found'));

        if (user_data.membership_type == 'A') {
            // Get data video
            const videos = await Video.findAll({
                where: {
                    deletedAt: null
                },
                limit: 3
            });

            if (videos) {
                return res.status(200).json(createResponse.success('Get all videos', videos));
            } else {
                return res.status(404).json(createResponse.error('No videos found'));
            }
        } else if (user_data.membership_type == 'B') {
            // Get data video
            const videos = await Video.findAll({
                where: {
                    deletedAt: null
                },
                limit: 10
            });

            if (videos) {
                return res.status(200).json(createResponse.success('Get all videos', videos));
            } else {
                return res.status(404).json(createResponse.error('No videos found'));
            }
        } else {
            // Get data video
            const videos = await Video.findAll({
                where: {
                    deletedAt: null
                }
            });

            if (videos) {
                return res.status(200).json(createResponse.success('Get all videos', videos));
            } else {
                return res.status(404).json(createResponse.error('No videos found'));
            }
        }
    } catch (error) {
        return res.status(500).json(createResponse.error('Server error ' + error.message));
    }
}

const detailVideo = async (req, res) => {
    try {
        // Decode token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
            if (error) {
                return res.status(403).json(createResponse.error('Unauthorized access'));
            }
            return user_id = decoded.id;
        });

        // Get detail video
        const { video_id } = req.params;
        const video = await Video.findOne({
            where: {
                id: video_id
            }
        });

        if (!video) return res.status(404).json(createResponse.error('Video not found'));
        return res.status(200).json(createResponse.success('Get detail video of ' + video.title, video));
    } catch (error) {
        
    }
}

module.exports = {
    getAllVideo,
    detailVideo,
}
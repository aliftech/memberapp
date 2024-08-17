const jwt = require('jsonwebtoken');

const createResponse = require('../utils/helper/response.helper');
const db = require('../models');
const Article = db.Articles;
const User = db.User;

const getAllArticles = async (req, res) => {
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

        if (!user_data) return res.status(404).json(createResponse.error('No user found'));

        if (user_data.membership_type == 'A') {
            // Get data article
            const articles = await Article.findAll({
                where: {
                    deletedAt: null
                },
                limit: 3
            });

            if (articles) {
                return res.status(200).json(createResponse.success('Get all articles', articles));
            } else {
                return res.status(404).json(createResponse.error('No articles found'));
            }
        } else if (user_data.membership_type == 'B') {
            // Get data article
            const articles = await Article.findAll({
                where: {
                    deletedAt: null
                },
                limit: 10
            });

            if (articles) {
                return res.status(200).json(createResponse.success('Get all articles', articles));
            } else {
                return res.status(404).json(createResponse.error('No articles found'));
            }
        } else {
            // Get data article
            const articles = await Article.findAll({
                where: {
                    deletedAt: null
                }
            });

            if (articles) {
                return res.status(200).json(createResponse.success('Get all articles', articles));
            } else {
                return res.status(404).json(createResponse.error('No articles found'));
            }
        }
    } catch (error) {
        return res.status(500).json(createResponse.error('Server error ' + error.message));
    }
}

const detailArticle = async (req, res) => {
    // Decode token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
        if (error) {
            return res.status(403).json(createResponse.error('Unauthorized access'));
        }
        return user_id = decoded.id;
    });

    // Get detail article
    const {article_id} = req.params;
    const article = await Article.findOne({ 
        where: {
            id: article_id
        }
    });

    if (!article) return res.status(404).json(createResponse.error('Article not found'));
    return res.status(200).json(createResponse.success('Get detail article of ' + article.title, article));
}

module.exports = {
    getAllArticles,
    detailArticle
}
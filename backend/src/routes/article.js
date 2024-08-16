const express = require('express');
const {verifyToken} = require('../utils/middleware/verifyToken');
const { getAllArticles, detailArticle } = require('../controllers/article.controller');

const router = express.Router();

router.get('/article', verifyToken, getAllArticles);
router.get('/article/:article_id', verifyToken, detailArticle);

module.exports = router;
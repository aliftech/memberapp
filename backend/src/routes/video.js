const express = require('express');
const {verifyToken} = require('../utils/middleware/verifyToken');
const { getAllVideo, detailVideo } = require('../controllers/video.controller');

const router = express.Router();

router.get('/video', verifyToken, getAllVideo);
router.get('/video/:video_id', verifyToken, detailVideo);

module.exports = router;
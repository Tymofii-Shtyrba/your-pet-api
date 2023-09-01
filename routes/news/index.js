const express = require('express');
const news = require('../../controllers/news/getNews.jsx');
const findNews = require('../../controllers/news/findNews.jsx');

const router = express.Router();

router.get('/', news);

router.get('/title', findNews);

module.exports = router;

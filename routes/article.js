const express = require('express');
const router = express.Router();
const article = require('../controllers/article');
const upload = require('../library/upload');
const auth = require('../middleware/auth');

/**
 * 分类路由
 */
router.get('/add', auth, article.add);
router.post('/save', upload.single('img'), article.save);
router.get('/:id', article.get);

module.exports = router;
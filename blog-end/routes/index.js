var express = require('express');
var router = express.Router();

var user = require('../controllers/user.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});


router.get('/article',user.getActicle);

router.get('/speak',user.getSpeak);

router.get('/speakNum',user.speakNum);

router.get('/getArticle',user.getOneArticle);

router.get('/articleNum',user.articleNum);

router.post('/selectArticle',user.selectArticle);

router.post('/getArticleByClass',user.getArticleByClass);

router.post('/replay',user.updatReplay);

router.post('/insertComment',user.insertComment);


router.post('/insertActileComment',user.insertActileComment);

router.get('/getTitle',user.getTitle);


router.get('/getComments',user.getComments);

module.exports = router;

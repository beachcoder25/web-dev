var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oyus there Matey', condition: true, anyArray: [1,2,3] });
});

/* GET users listing. */
router.get('/users/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/details', function(req, res, next) {
  res.send('Detailzzzzzzzzzz');
});

module.exports = router;

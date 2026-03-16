var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('corpo', { title: 'Corpo' });
});

router.get('/cabeca', function(req, res, next) {
  res.render('cabeca', { title: 'Cabeça' });
});

router.get('/barriga', function(req, res, next) {
  res.render('barriga', { title: 'Barriga' });
});


module.exports = router;

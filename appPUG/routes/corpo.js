var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('corpo/index', { title: 'Corpo' });
});

router.get('/cabeca', function(req, res, next) {
  res.render('corpo/cabeca', { title: 'Cabeça' });
});

router.get('/barriga', function(req, res, next) {
  res.render('corpo/barriga', { title: 'Barriga' });
});


module.exports = router;

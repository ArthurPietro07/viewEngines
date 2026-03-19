var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('constelacao/index', { title: 'Constelação' });
});

module.exports = router;

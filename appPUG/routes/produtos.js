var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('produtos/index', { title: 'Produtos' , produtos: produtos });
});

const produtos = [
    { id: 1, nome: 'Produto A', preco: 10.00 },
    { id: 2, nome: 'Produto B', preco: 1.00 },
    { id: 3, nome: 'Produto C', preco: 40.00 }
];

module.exports = router;

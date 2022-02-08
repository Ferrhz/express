var express = require('express');
var router = express.Router();
const petController = require("../controller/petsController")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aula 03/02' });
});

router.get('/servico', petController.listaServico);
router.get('/pets', petController.listaPets);


module.exports = router;

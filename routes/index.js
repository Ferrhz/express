var express = require('express');
var router = express.Router();
const petController = require("../controller/petsController")
const usuarioController = require("../controller/usuarioConteroller")
const contatoController = require("../controller/contatoController")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aula 03/02' });
});

router.get('/servico', petController.listaServico);
router.get('/pets', petController.listaPets);
router.get('/cadastro', usuarioController.cadastro);
router.get('/contato', contatoController.contato);
router.get('/login', usuarioController.login);

module.exports = router;

var express = require('express');
var router = express.Router();
const petController = require("../controller/petsController")
const usuarioController = require("../controller/usuarioConteroller")
const contatoController = require("../controller/contatoController")
const servicosController = require("../controller/servicosController")
const indexController = require("../controller/indexController")

/* GET home page. */


router.get('/servico', petController.listaServico);
router.get('/pets', petController.listaPets);
router.get('/cadastro', usuarioController.cadastro);
router.get('/contato', contatoController.contato);
router.get('/login', usuarioController.login);
router.get('/servicos', servicosController.servicos)
router.get('/',indexController.index)
router.get('/sobre', usuarioController.sobre)
router.get('/cadastroservico',servicosController.exibeServico)
router.post('/cadastroservico',servicosController.criarServico)

router.get('/cadastrapet', petController.exibePet)
router.post('/cadastrapet', petController.cadastraPet)

module.exports = router;

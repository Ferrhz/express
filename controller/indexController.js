const servico = require('../model/servico.json')

const indexController = {
   index: (req, res)=> {
       res.render('index', {listaServicos:servico})
   }
}
module.exports = indexController
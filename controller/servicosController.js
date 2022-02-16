
let modelServico = require('../model/servico.json')

const servicosController = {
    servicos:(req, res) =>{
        res.render('servicos')
    },
    criarServico:(req,res)=>{
        let servico =req.body
        modelServico.push(servico)
        res.redirect('/')
    },
       
    exibeServico:(req,res)=>{
        res.render('cadastro')
    }
}

module.exports = servicosController
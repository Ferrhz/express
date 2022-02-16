let modelServico = require("../model/servico.json");
let modelPets = require("../model/pets.json")

const petController = {
    listaServico:(req, res)=>{
        res.send(modelServico);
    },
    listaPets:(req, res)=>{
        res.send(modelPets)
    },
    exibePet:(req, res)=>{
    res.render('cadastroPet')
    },
    cadastraPet:(req, res) =>{
    let pet = req.bory
    modelPets.push(pet) 
    res.redirect('/')
    }
}
module.exports = petController

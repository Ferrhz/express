const usuarioController = {
cadastro:(req, res) =>{
    res.render('cadastro')
},
login:(req, res) =>{
    res.render('login')
},
sobre:(req, res) =>{
    res.render('sobre')
}
}
module.exports = usuarioController
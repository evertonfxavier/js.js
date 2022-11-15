// const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   titulo: "Outro título qualquer",
//   descricao: "uma descrição qualquer",
// })
//   .then((dados) => console.log(dados))
//   .catch((err) => console.log(err));

exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.send("olá meu post");
};

// const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   titulo: "Outro título qualquer",
//   descricao: "uma descrição qualquer",
// })
//   .then((dados) => console.log(dados))
//   .catch((err) => console.log(err));

exports.paginaInicial = (req, res) => {
  // req.session.usuario = {
  //   nome: "Everton",
  //   logado: true,
  // };

  // console.log(req.session.usuario); // vai ficar aqui por 7d até o fim da sessao

  // req.flash('olá', 'mundo'); //apos o envio do formulário, essa msg é removida
  // console.log(req.flash('olá'))

  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send("olá meu post");
  return;
};

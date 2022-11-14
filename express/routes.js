const express = require("express");
const route = express.Router();

const meuMiddleware = require("./src/middlewares/middlewares");

const homeController = require("./src/controllers/homeController");

// function meuMiddleware(req, res, next) {
//   console.log();
//   console.log("passei no meu middleware");
//   console.log();
//   next();
// }

//rotas da home
route.get("/", meuMiddleware, homeController.paginaInicial);
route.post("/", homeController.trataPost);

module.exports = route;

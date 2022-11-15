require("dotenv").config();

const express = require("express");
const app = express();

//conectando a base de dados
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("a conexao com o DB ocorreu");
    //1
    app.emit("pronto");
  })
  .catch((err) => console.log(err));

//----

const path = require("path");
const routes = require("./routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname, "src", "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.on("pronto", () => {
  //a conexao com o back só vai ocorrer após quando o DB estiver pronto
  //2
  app.listen(3333, () => console.log("servidor execudando na porta 3333"));
});

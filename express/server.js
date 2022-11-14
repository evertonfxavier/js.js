const express = require("express");
const app = express();

//o express vai ajudar a trabalhar com as rotas (get, post, put, delete, etc)

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/contact", (request, response) => {
  response.send("salve meu contato");
});

app.listen(3333, () => console.log("servidor execudando na porta 3333"));

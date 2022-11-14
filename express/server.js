const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  // response.send("hello world");
  response.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome" />
        <button>vai</button>
    </form>
  `);
});

app.get("/teste/:idUser", (request, response) => {
  console.log(request.params);
  response.send("hello world");
});

app.post("/", (request, response) => {
  console.log(request.body);
  response.send("recebido");
});

app.listen(3333, () => console.log("servidor execudando na porta 3333"));

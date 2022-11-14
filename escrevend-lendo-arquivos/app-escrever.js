const path = require("path");
const caminhooArquivo = path.resolve(__dirname, "testee2e2.json");
// const escreve = require("./modules/escrever");

const pessoas = [{ nome: "joao" }, { nome: "maria" }, { nome: "jose" }];
const jsonPessoas = JSON.stringify(pessoas, "", 2);

// escreve(caminhooArquivo, jsonPessoas);
fs.writeFile(caminhooArquivo, jsonPessoas, { flag: "w" });

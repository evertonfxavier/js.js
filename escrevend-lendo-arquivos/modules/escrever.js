const fs = require("fs").promises;
const path = require("path");

// const caminhooArquivo = path.resolve(__dirname, '..', 'testeee.txt');

// fs.writeFile(caminhooArquivo, "Frase 1", { flag: "w", encoding: "utf8" });
// fs.writeFile(caminhooArquivo, "Frase 1", { flag: "a", encoding: "utf8" });
// fs.writeFile(caminhooArquivo, "Frase 1\n", { flag: "a", encoding: "utf8" }); // quebra linha

//frase 1 > é o que eu quero colocar no arquivo
// flag w > sobrescreve s info anteriores com novas info
// flag a > adiciona um novo sem sobreescrever, sem quebrar linha

//---
// const caminhooArquivo = path.resolve(__dirname, "..", "testeee2.json");

// const pessoas = [{ nome: "joao" }, { nome: "maria" }, { nome: "jose" }];

// const jsonPessoas = JSON.stringify(pessoas, "", 2);

// fs.writeFile(caminhooArquivo, jsonPessoas, { flag: "a", encoding: "utf8" });

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" });
};

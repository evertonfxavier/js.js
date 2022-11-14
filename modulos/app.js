// const mod1 = require("./mod1");

// console.log(mod1);

//---

// const { Pessoa } = require("./mod1");

// const p1 = new Pessoa("Luiz");
// console.log(p1);

//--

// const axios = require("axios");

// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
//   .then((res) => console.log(res.data))
//   .catch((e) => console.log(e));

//---

const path = require("path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.resolve(__dirname));

// console.log(path.resolve(__dirname, '..', '..')); //volta 2 paginas
console.log(path.resolve(__dirname, '..', '..', '..', 'app-map')); 

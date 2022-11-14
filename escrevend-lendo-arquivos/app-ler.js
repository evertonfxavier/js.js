const path = require("path");
const caminhoDoArquivoJSON = path.resolve(__dirname, 'hibrido', "selection.json");

const fs = require("fs").promises;
// const ler = require("./modules/ler");

async function lerArquivo(caminho) {
  const response = await fs.readFile(caminho, "utf8");
  // const response = await ler(caminho);
  renderizaDados(response);
}
lerArquivo(caminhoDoArquivoJSON);

// const dadosArquivo = lerArquivo(caminhoDoArquivoJSON).then((dados) =>
//   console.log(dados)
// );

const renderizaDados = (dados) => {
  const resp = JSON.parse(dados);
  const iconsList = resp["icons"];

  //   console.log(iconsList);
  //   console.log(JSON.parse(iconsList));
  //   const newDados = JSON.parse(iconsList);

  //   dados = JSON.parse(dados);
  iconsList.forEach((el) => console.log(el.properties['name']));
};

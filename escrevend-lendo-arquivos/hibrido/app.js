const fs = require("fs").promises;
const path = require("path");
const caminhoDoArquivoJSON = path.resolve(__dirname, "selection.json");

const caminhoDoArquivoGerado = path.resolve(__dirname, "uii.ts");

async function lerArquivo(caminho) {
  const response = await fs.readFile(caminho, "utf8");
  arquivosRenderizaDados(response);
}
lerArquivo(caminhoDoArquivoJSON);

const arquivosRenderizaDados = (dados) => {
  const resp = JSON.parse(dados);
  const iconsList = resp["icons"];

//   iconsList.forEach((el) => getAllNames(el.properties["name"]));
  iconsList.map((el) => getAllNames(el.properties.name));
};

const getAllNames = (names) => {
  const transformPerson = JSON.stringify(names);
//   console.log(transformPerson);
//   console.log(names);

  fs.writeFile(caminhoDoArquivoGerado, `${transformPerson}\n\|`, { flag: "a" });
};

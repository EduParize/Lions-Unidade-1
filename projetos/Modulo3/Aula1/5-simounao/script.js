let resposta = prompt("Voce gosta de cafe? (responda com 'sim' ou 'nao')");

let respostaFormatada = resposta.toLowerCase();

if (respostaFormatada === "sim" || respostaFormatada === "s") {
  alert("Que otimo! Um bom cafe anima o dia!");
  console.log("O usuario respondeu que gosta de cafe.");
} else if (respostaFormatada === "nao" || respostaFormatada === "n") {
  alert("Tudo bem, talvez um cha seja um boa pedida!");
  console.log("O usuario respondeu que nao gosta de cafe");
} else {
  alert("Desculpe, nao entendi sua resposta.");
  console.log("O usuaio deu uam resposta invalida" + resposta);
}

console.log("Fim da interacao.")
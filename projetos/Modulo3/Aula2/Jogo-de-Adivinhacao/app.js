const readline = require("readline");
const maxTentativas = 3
let numero = Math.floor(Math.random() * 5);
let rodadas = 0;
let i = 1;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Bem vindo ao Jogo de Advinhacao");
console.log("Tente advinhar o numero:");

rl.prompt();

rl.on("line", (resposta) => {
  if (i < maxTentativas) {
    if (resposta == numero) {
      console.log("Parabens, vc acertou!");
      rodadas++;
      console.log(`Quantidades de rodadas necessarias: ${rodadas}`);
      console.log("Fim de jogo!");
      process.exit();
    } else {
      console.log("Numero errado!");
      rodadas++;
    }
    i++;
  } else {
    console.log("Limite de tentativas!");
    console.log("Fim de jogo!");
    process.exit();
  }
});


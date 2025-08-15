const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let escolhas = ["Pedra", "Papel", "Tesoura"];
var jogos = 0,
  vitoria = 0,
  empate = 0,
  perdeu = 0;
let resultado;

function exibirMenu() {
  rl.question("1-Jogar\n2-Sair\nInsira a sua escolha: ", (escolhaMenu) => {
    escolhaMenu = parseInt(escolhaMenu);
    switch (escolhaMenu) {
      case 1:
        jogo();
        break;
      case 2:
        console.log("Saindo do programa!");
        sair();
      default:
        console.log("\nEscolha uma opcao valida!");
        console.log("------------------------");
        exibirMenu();
    }
  });
}

function jogo() {
  let escolhaComputador = Math.floor(Math.random() * 3);
  rl.question(
    "\n1-Pedra\n2-Papel\n3-Tesoura\nInsira a sua escolha: ",
    (escolhaJogador) => {
      if (escolhaJogador < 0 || escolhaJogador > 3) {
        console.log("\nEscolha uma opcao valida!");
        console.log("------------------------");
        jogo();
      } else {
        jogadaJogador = escolhaJogador - 1;
        if (escolhas[escolhaComputador] == escolhas[jogadaJogador]) {
          resultado = "\nEmpate!";
          empate++;
          console.log("------------------------");
        } else if (
          (escolhaComputador == 0 && jogadaJogador == 1) ||
          (escolhaComputador == 1 && jogadaJogador == 2) ||
          (escolhaComputador == 2 && jogadaJogador == 0)
        ) {
          resultado = "\nVocê venceu! =)";
          console.log("------------------------");
          vitoria++;
        } else {
          resultado = "\nVocê perdeu! =(";
          console.log("------------------------");
          perdeu++;
        }
        console.log(
          `Escolha do Jogador: ${escolhas[jogadaJogador]}\nEscolha do Computador: ${escolhas[escolhaComputador]}`
        );
        console.log(`${resultado}\n`);
        console.log("------------------------");
        jogos++;
        console.log("Gostaria de jogar novamente?");
        exibirMenu();
      }
    }
  );
}

function sair() {
  console.log("------------------------");
  console.log(
    `Você jogou ${jogos} jogos\nvitorias: ${vitoria}\nderrotas: ${perdeu}\nempates: ${empate}`
  );
  console.log("------------------------");
  process.exit();
}

exibirMenu();

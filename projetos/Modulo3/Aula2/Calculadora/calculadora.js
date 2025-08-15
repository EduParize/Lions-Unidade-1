const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let resultado;

function sairDoPrograma() {
  rl.close();
}

function Calcular() {
  rl.question("Digite o primeiro numero: ", (num1) => {
    num1 = parseFloat(num1, 10);

    rl.question("Digite o segundo numero: ", (num2) => {
      num2 = parseFloat(num2, 10);

      rl.question(
        "Escolha uma operacao:\n1- Soma\n2- Subtracao\n3- Multiplicacao\n4- Divisao\n",
        (operacao) => {
          operacao = parseInt(operacao, 10);

          switch (operacao) {
            case 1:
              resultado = num1 + num2;
              break;
            case 2:
              resultado = num1 - num2;
              break;
            case 3:
              resultado = num1 * num2;
              break;
            case 4:
              if (num2 == 0) {
                console.log("Erro, divisão por zero!");
                console.log("-----------------------------");
                exibirMenu()
              } else {
                resultado = num1 / num2;
              }
              break;
            default:
              console.log("Operacao invalida!");
              console.log("-----------------------------");
              exibirMenu()
              break;
          }
          if ((num2 == 0 && operacao == 4) || operacao > 4) {
          } else {
            console.log(`Resultado: ${resultado}`);
            console.log("-----------------------------");
            exibirMenu();
          }
        }
      );
    });
  });
}

function exibirMenu() {
  rl.question("Escolha uma opcao:\n1-Calcular\n2-Sair\n", (opcao) => {
    opcao = parseInt(opcao, 10);
    switch (opcao) {
      case 1:
        Calcular();
        break;
      case 2:
        console.log("Saindo do programa!");
        sairDoPrograma();
        break;
    }
  });
}

exibirMenu();

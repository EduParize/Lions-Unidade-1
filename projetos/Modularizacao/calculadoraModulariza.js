const divisao = require("./divisao.js");
const soma = require("./soma.js");
const subtracao = require("./subtracao.js");
const multiplicacao = require("./multiplicacao.js");


const prompt = require("prompt-sync")();
function lerEntrada(mensagem) {
  return prompt(mensagem);
}

function realizarOperacao(num1, num2, operacao) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let resultado;

  switch (operacao) {
    case "+":
      resultado = soma(num1, num2);
      break;
    case "-" :
      resultado = subtracao(num1, num2);
      break;
    case "*":
      resultado = multiplicacao(num1, num2);
      break;
    case "/":
      resultado = divisao(num1, num2);
      break;
    default:
      console.log("Insira uma operacao valida!");
      break;
  }
  console.log(resultado);
}

realizarOperacao(10, 25, '+');

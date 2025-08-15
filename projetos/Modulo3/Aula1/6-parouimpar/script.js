let numeroInput = prompt("Digite um numero inteiro: ");

let numero = parseInt(numeroInput);

if (numero % 2 === 0) {
  alert("O numero " + numero + " eh PAR");
  console.log(`O numero ${numero} foi classificado como Par`);
} else {
  alert("O numero " + numero + " eh IMPAR");
  console.log(`O numero ${numero} foi classificado como IMPAR`);
}

console.log("Fim da analise de paridade.");

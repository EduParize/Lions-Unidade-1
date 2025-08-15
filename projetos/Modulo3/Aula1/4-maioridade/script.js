let idadeInput = prompt("Por favor, digite sua idade: ");

let idade = parseInt(idadeInput);

if (idade >= 18) {
  alert("Voce eh maior de idade! Acesso permitido.");
  console.log("O usuario tem " + idade + " anos e eh maior de idade");
} else {
  alert("Voce eh menor de idade! Acesso negado.");
  console.log("O usuario tem " + idade + "anos e eh menor de idade");
}

console.log("Fim da verificacao.");

//Exercicio 1:

let stringInvertida = "";
function ReverseString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  return stringInvertida;
}
let stringPrincipal = "palmeiras";
console.log(`String principal invertida: '${ReverseString(stringPrincipal)}'`);
console.log("------------------------------");

//Exercicio 2:
let vogais = ["a", "e", "i", "o", "u"];
let vogaisJaContadas = [];
function contVogais(string) {
  let qntVogais = 0;
  string = string.toLowerCase();
  for (i = 0; i < string.length; i++) {
    if (vogais.includes(string[i])) {
      if (vogaisJaContadas.includes(string[i])) {
      } else {
        vogaisJaContadas.push(string[i]);
        qntVogais++;
      }
    }
  }
  return qntVogais;
}
let stringVogais = "aaaaeiou";
console.log(`Olá. quantidade de vogais: ${contVogais(stringVogais)} // sendo elas : "${vogaisJaContadas}"\n`);

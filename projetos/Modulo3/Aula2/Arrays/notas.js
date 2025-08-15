const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inserirNota1() {
  rl.question("Insira a primeira nota: ", (nota1) => {
    if (nota1 > 10 || nota1 < 0 || isNaN(nota1)) {
      console.log("Nota invalida!");
      inserirNota1();
    } else {
      nota1 = parseFloat(nota1, 10);
      inserirNota2(nota1);
      //return nota1;
    }
  });
}

function inserirNota2(nota1) {
  rl.question("Insira a segunda nota: ", (nota2) => {
    if (nota2 > 10 || nota2 < 0 || isNaN(nota2)) {
      console.log("Nota invalida!");
      inserirNota2(nota1);
    } else {
      nota2 = parseFloat(nota2, 10);
      mostrarNotas(nota1, nota2);
      //return nota2;
    }
  });
}

function mostrarNotas(nota1, nota2) {
  let notas = [];
  notas.push(nota1);
  notas.push(nota2);
  media = (notas[0] + notas[1]) / notas.length;
  console.log(`A media das notas ${notas[0]} e ${notas[1]} eh: ${media}`);
  console.log(notas);
  rl.close();
}

inserirNota1();
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Por favor, digite seu nome: ", (nome) => {
  r1.question("Agora, digite sua idade: ", (idade) => {
    r1.question("Você possui CHN: (sim/não): ", (respostaCNH) => {
      let temCNH = false;

      if (
        respostaCNH.toLowerCase() === "sim" ||
        respostaCNH.toLowerCase() === "s"
      ) {
        temCNH = true;
      }
      console.log(`\nOlá, ${nome}! Você tem ${idade} anos`);

      if (temCNH) {
        console.log("Parabens, voce pode digirir!");
      } else {
        console.log("Voce nao pode dirigir");
      }
      r1.close();
    });
  });
});

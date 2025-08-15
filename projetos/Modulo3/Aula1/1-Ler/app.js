const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Por favor, digite seu nome: ", (nome) => {
  r1.question("Agora, digite sua idade: ", (idade) => {
    console.log(`\nOlá, ${nome}! Você tem ${idade} anos. Seja bem-vindo(a)!`);

    r1.close();
  });
});

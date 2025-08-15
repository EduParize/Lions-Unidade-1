
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira qual tabuada deseja: ", (tabuada) => {
  tabuada = parseInt(tabuada);

  for (let i = 1; i*tabuada <= 100; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
  }
  rl.close();
});

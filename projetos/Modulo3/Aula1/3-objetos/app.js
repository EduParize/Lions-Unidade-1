const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Por favor, digite seu nome: ", (nome) => {
  r1.question("Agora, digite sua idade: ", (idade) => {
    r1.question("Você possui CHN: (sim/não): ", (respostaCNH) => {
      const usuario = {
        nome: nome,
        idade: parseInt(idade),
        possuiCNH:
          respostaCNH.toLowerCase() === "sim" ||
          respostaCNH.toLowerCase() === "s",
      };

      console.log("\n---Ficha do Usuario ---");
      console.log(`Nome: ${usuario.nome}`);
      console.log(`Ìdade: ${usuario.idade} anos`);

      const statusCNH = usuario.possuiCNH ? "Sim" : "Não";
      console.log(`Possui CNH? ${statusCNH}`);
      console.log("----------------------------");

      console.log("\nObjeto completo: ");
      console.log(usuario);

      r1.close();
    });
  });
});

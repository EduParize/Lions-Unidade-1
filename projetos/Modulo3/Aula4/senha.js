const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let caracteres =
  "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890";
let senha = "";

function gerarSenha() {
  rl.question(
    "Insira quantos caracteres deseja que a sua seha tenha: ",
    (comprimentoSenha) => {
      if (isNaN(comprimentoSenha) || comprimentoSenha <= 0) {
        console.log("Insira um numero valido!");
        gerarSenha();
      } else {
        comprimentoSenha = parseInt(comprimentoSenha, 10);

        for (let i = 0; i < comprimentoSenha; i++) {
          senha += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
          );
        }
        console.log(senha);
        process.exit();
      }
    }
  );
}

gerarSenha();

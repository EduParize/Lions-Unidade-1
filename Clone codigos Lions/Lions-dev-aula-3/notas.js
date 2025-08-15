// Importa o módulo 'readline' do Node.js e já cria uma interface para ler entradas do usuário
const rl = require('readline').createInterface({
  input: process.stdin,   // define que a entrada será o teclado (terminal)
  output: process.stdout  // define que a saída será o terminal
});

// Exibe o prompt 
rl.prompt();

// Faz a primeira pergunta ao usuário: "Digite a nota da primeira prova: "
rl.question('Digite a nota da primeira prova: ', (input1) => {
  // Cria um array para armazenar as notas
  const notas = [];
  let media;                            // variável para guardar a média
  let prova1 = parseFloat(input1);     // converte a resposta (string) em número decimal
  notas.push(prova1);                  // adiciona a nota da primeira prova ao array

  // Faz a segunda pergunta ao usuário: "Digite a nota da segunda prova: "
  rl.question('Digite a nota da segunda prova: ', (input2) => {
    let prova2 = parseFloat(input2);   // converte a resposta em número decimal
    notas.push(prova2);                // adiciona a nota da segunda prova ao array

    // Soma as duas notas armazenadas no array
    let soma = notas[0] + notas[1];
    // Calcula a média dividindo pela quantidade de notas (2)
    media = soma / notas.length;

    // Fecha a interface de leitura e, em seguida, exibe a média no console
    rl.close(
      console.log(`Sua média foi ${media}`)
    );
  });
});

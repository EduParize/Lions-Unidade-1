// Importa o módulo readline para permitir interação com o usuário via console
const readline = require('readline');

// Cria uma interface de leitura/escrita usando stdin (entrada) e stdout (saída)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário um número para gerar a tabuada até 100
rl.question('Digite um número para ver a tabuada até 100: ', (tabuada) => {
    // Converte a resposta (string) em número inteiro
    const num = parseInt(tabuada);

    // Se a conversão não resultar num número válido, exibe mensagem de erro
    if (isNaN(num)) {
        console.log('Por favor, digite um número válido.');
    } else {
        // Caso seja um número válido, percorre de 1 até 100
        for (let i = 1; i <= 100; i++) {
            // Exibe a multiplicação do número informado pelo índice atual
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }

    // Encerra a interface readline, finalizando a aplicação
    rl.close();
});

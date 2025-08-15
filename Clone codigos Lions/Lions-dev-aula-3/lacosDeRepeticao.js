const readline = require('readline');

const meuArray = [1, 2, 3, 4, 5];

// =================================
// 1. LOOP FOR TRADICIONAL
// =================================
// O loop for é estruturado com três partes:
// - Inicialização: let i = 0 (declara e inicializa a variável de controle)
// - Condição: i < meuArray.length (verifica se deve continuar)
// - Incremento: i++ (executa após cada iteração)
// É ideal quando você sabe quantas vezes vai repetir
for (let i = 0; i < meuArray.length; i++) {
    console.log(meuArray[i]);
}

// =================================
// 2. LOGS INDIVIDUAIS (SEM LOOP)
// =================================
// Aqui cada elemento é acessado manualmente pelo índice
// Não é eficiente para arrays grandes
// Mostra como seria sem usar loops
console.log(meuArray[0]);
console.log(meuArray[1]);
console.log(meuArray[2]);
console.log(meuArray[3]);
console.log(meuArray[4]);


// O while verifica a condição ANTES de executar o bloco
// A variável de controle deve ser declarada e inicializada ANTES do loop
let e = 0; // CORREÇÃO: inicializar 
while (e < meuArray.length) {
    console.log(meuArray[e]);
    e++;
} 

// 4. LOOP DO-WHILE (SEM ERROS)

// O do-while executa o bloco PELO MENOS UMA VEZ, depois verifica a condição
let d = 0; // CORREÇÃO: inicializar com 0
do {
    console.log(meuArray[d]);
    d++;
} while (d < meuArray.length);

// =================================
// 5. FOREACH - MÉTODO DE ARRAY
// =================================
// O forEach é um método específico para arrays
// Não precisa de variável de controle ou verificação de índice
// Executa a função para cada elemento do array
// Mais legível e menos propenso a erros
meuArray.forEach(element => {
    console.log(element);
});




// RESUMO DAS PRINCIPAIS DIFERENÇAS:
/*
FOR:    
- Estrutura completa em uma linha
- Ideal para quando você sabe o número de iterações
- Variável de controle local ao loop

WHILE:
- Verifica condição ANTES de executar
- Pode nunca executar se condição for falsa inicialmente
- Mais flexível para condições complexas

DO-WHILE:
- Executa PELO MENOS UMA VEZ
- Verifica condição DEPOIS de executar
- Útil quando você precisa executar pelo menos uma vez

FOREACH:
- Método específico para arrays
- Mais limpo e legível
- Não dá acesso direto ao índice (só ao elemento)
- Não pode ser interrompido com break
*/
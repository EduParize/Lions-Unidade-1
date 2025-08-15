// Inicializa contadores e somas para números pares e ímpares
let totalPares = 0;      // Conta quantos números pares encontramos
let totalImpares = 0;    // Conta quantos números ímpares encontramos
let somaPares = 0;       // Acumula a soma de todos os números pares
let somaImpares = 0;     // Acumula a soma de todos os números ímpares

// Percorre todos os números de 0 até 999
for (let i = 0; i <= 999; i++) {
    // Se o resto da divisão por 2 for zero, é um número par
    if (i % 2 === 0) {
        somaPares += i;   // Adiciona o valor atual à soma de pares
        totalPares++;     // Incrementa o contador de pares
    } else {
        somaImpares += i; // Adiciona o valor atual à soma de ímpares
        totalImpares++;   // Incrementa o contador de ímpares
    }
}

// Calcula a média aritmética de cada grupo
const mediaPares = somaPares / totalPares;
const mediaImpares = somaImpares / totalImpares;

// Exibe resultados no console
console.log(`Total de números pares: ${totalPares}`);             // Quantos pares foram encontrados
console.log(`Total de números ímpares: ${totalImpares}`);         // Quantos ímpares foram encontrados
console.log(`Soma dos números pares: ${somaPares}`);              // Soma total dos pares
console.log(`Soma dos números ímpares: ${somaImpares}`);          // Soma total dos ímpares
console.log(`Média aritmética dos pares: ${mediaPares}`);         // Média dos valores pares
console.log(`Média aritmética dos ímpares: ${mediaImpares}`);     // Média dos valores ímpares

// Compara as somas e informa qual é maior ou se são iguais
if (somaImpares > somaPares) {
    console.log(`A soma dos ímpares (${somaImpares}) é maior que a dos pares (${somaPares}).`);
} else if (somaPares > somaImpares) {
    console.log(`A soma dos pares (${somaPares}) é maior que a dos ímpares (${somaImpares}).`);
} else {
    console.log('As somas são iguais.');
}

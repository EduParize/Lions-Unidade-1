// Métodos de Arrays em JavaScript]
// 1 - Push  - usado para adicionar um ou mais elementos ao final de um array.
// 2 - Pop - usado para remover o último elemento de um array 
// 3 - Shift - usado para remover o primeiro elemento de um array.
// 4 - Unshift - usado para adicionar um ou mais elementos ao início de um array.
// 5 - Splice - usado para adicionar ou remover elementos de um array em uma posição específica.
// 6 - Slice - Usado para extrair uma parte de um array sem modificar o array original.
// 7 - Includes - usado para verificar se um array contém um determinado elemento.
// 8 - IndexOf - Usado para encontrar o índice de alguma propriedade em um array.
// 9 - Length - Usado para obter o tamanho de um array, ou seja, quantos elementos ele contém.


//! 1 - Push //

const meuArrDeExemplo = [1, 2, 3, 4, 5];

meuArrDeExemplo.push(6);  // Adiciona o número 6 ao final do array

console.log(meuArrDeExemplo); 

//! 2 - Pop //
const personagensPrincipais = ['Harry', 'Hermione', 'Ron'];

personagensPrincipais.pop();  // Remove o último elemento do array (Ron)

console.log(personagensPrincipais);

//! 3 - Shift //
const novosPersonagensPrincipais = ['Minato', 'Naruto', 'Obito'];

novosPersonagensPrincipais.shift();  // Remove o primeiro elemento do array (Naruto)

console.log(novosPersonagensPrincipais);

//! 4 - Unshift //
const maisPersonagensPrincipais = ['Sasuke', 'Sakura'];
maisPersonagensPrincipais.unshift('Kakashi');  // Adiciona Kakashi no início do array
console.log(maisPersonagensPrincipais);

//! 5 - Splice //
const carros = ['Ferrari', 'Bmw', 'Audi', 'Toyota', 'Honda'];
carros.splice(0,2) // A partir do índice 0, remove 2 elementos do array
console.log(carros) ;  // ['Audi', 'Toyota', 'Honda']

carros.splice(0, 0, 'Mercedes', 'Lamborghini'); // A partir do índice 0, adiciona 'Mercedes' e 'Lamborghini' sem remover nenhum elemento
console.log(carros); 

carros.splice(2, 1, 'Porsche'); // A partir do índice 2, remove 1 elemento e adiciona 'Porsche'
console.log(carros);  

//! 6 - Slice //
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Pera'];
const frutasSelecionadas = frutas.slice(1, 3) // Seleciona os elementos do índice 1 até o índice 3 (não inclui o 3); 
console.log(frutasSelecionadas);  // ['Banana', 'Laranja']
 

//! 7 - Includes //
const numeros = [1, 2, 3, 4, 5];
const contemTres = numeros.includes(3);  // Verifica se o número 3 está no array
console.log(contemTres);  // true

let personagensPrincipaisDoSherek = ['Principe Encantado', 'Fiona']
if (personagensPrincipaisDoSherek.includes('Principe Encantado')) {
console.log("O filme é Shrek 2 ou 3") 
}

//! 8 - IndexOf //
const animais = ['Cachorro', 'Gato', 'Pássaro', 'Peixe'];
const indiceDoGato = animais.indexOf('Gato');  // Retorna o índice do elemento 'Gato'
console.log(indiceDoGato);  // 1

//! 9 - Length //
const numerosArray = [10, 20, 30, 40, 50];
const tamanhoDoArray = numerosArray.length;  // Retorna o tamanho do array
if (tamanhoDoArray >= 5) {
    console.log(`O array é grande e tem ${tamanhoDoArray} elementos.`);
}
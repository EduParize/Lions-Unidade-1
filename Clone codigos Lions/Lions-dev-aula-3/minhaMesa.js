const minhaMesa = ["Mayra", "Clara", "Lucky", "Mariane", "Filipe"]

console.log(`Meu nome é ${minhaMesa[4]}, minhas colegas são: ${minhaMesa[0]}, ${minhaMesa[1]}, ${minhaMesa[2]}, ${minhaMesa[3]}`); 

//Vamos adicionar mais um colega na mesa Push
// Remover o primeiro elemento da mesa 
// E Apagar um elemento do meio da mesa 

minhaMesa.push("Gustavo"); 
console.log(`Agora minha mesa é composta por: ${minhaMesa}`);

minhaMesa.shift(); // Remove o primeiro elemento
console.log(`Depois de remover o primeiro elemento, minha mesa é composta por: ${minhaMesa}`);

const meio = minhaMesa.splice(2, 1); // Remove o elemento do meio
console.log(`Depois de remover o elemento do meio, minha mesa é composta por: ${minhaMesa}`);
console.log(`O elemento removido do meio foi: ${meio}`);
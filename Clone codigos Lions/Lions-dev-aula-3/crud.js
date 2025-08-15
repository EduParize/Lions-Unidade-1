// Oq é um crud 
// C = Create
// R = Read
// U = Update
// D = Delete

// Criar um Elemento no inicio do array

const linguagens = ["Python", "JavaScript", "Java", "C++", "Ruby"];

// Create
linguagens.push("Go"); // Adiciona "Go" ao final do array

// Read
console.log(linguagens); // Exibe o array completo

// Update
linguagens[1] = "TypeScript"; // Atualiza "JavaScript" para "TypeScript"

console.log(`Tchau JS agora é : ${linguagens}`);

// Delete
const deleted = linguagens.splice(2,3); // Remove tres elementos a partir do índice 2

console.log(deleted)

console.log(linguagens)






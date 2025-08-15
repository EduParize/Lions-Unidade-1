let paisA = 80000,
  paisB = 200000,
  anos = 0;

for (anos; paisA < paisB; anos++) {

  console.log(`Populacao pais A no ano ${anos}: ${paisA}`);
  console.log(`Populacao pais B no ano ${anos}: ${paisB}`);
  console.log("=====================================");
  paisA = paisA * 1.03;
  paisB = paisB * 1.015;
  paisA = parseInt(paisA);
  paisB = parseInt(paisB);

}

console.log(`Populacao pais A no ano ${anos}: ${paisA}`);
console.log(`Populacao pais B no ano ${anos}: ${paisB}`);
console.log("=====================================");
console.log(anos);
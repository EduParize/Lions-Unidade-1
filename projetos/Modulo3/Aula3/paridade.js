let totalPares = 0,
  totalImpares = 0,
  somaPares = 0,
  somaImpares = 0;

for (i = 0; i < 1000; i++) {
  if (i % 2 == 0) {
    totalPares++;
    somaPares += i;
  } else {
    totalImpares++;
    somaImpares += i;
  }
}
console.log(`Total de pares: ${totalPares}\nTotal de impares: ${totalImpares}`);
console.log(`Soma total dos pares: ${somaPares} e sua respectiva media: ${somaPares/totalPares}`)
console.log(`Soma total dos impares: ${somaImpares} e sua respectiva media: ${somaImpares/totalImpares}`)

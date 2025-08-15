// Função nomeada (named function):
// - Tem um nome (somaDeTresNumero), que ajuda a identificar o que ela faz.
// - Pode ser chamada antes ou depois de sua definição, graças ao “hoisting” do JavaScript.
function somaDeTresNumero(a1, a2, a3) {
  // a1, a2 e a3 são parâmetros; dentro da função, podemos usar esses nomes como variáveis.
  return a1 + a2 + a3; // devolve (retorna) a soma dos três números
}

// Função nomeada tradicional:
// - Também tem um nome (dividir).
// - Recebe dois parâmetros, faz uma divisão e retorna o resultado.
function dividir(a, b) {
  return a / b;
}

// Arrow function atribuída a uma constante:
// - Não tem nome próprio (“função anônima”), mas como está em uma variável (dividirUsandoArrowFunction),
//   podemos chamá-la usando esse identificador.
// - Sintaxe mais curta e ligada ao contexto onde foi criada (binding do this diferente).
const dividirUsandoArrowFunction = (a, b) => {
  return a / b;
};

// Exibindo resultados no console:
console.log(dividirUsandoArrowFunction(10, 2)); // 5  
// Chamamos a “arrow function” pela variável que a guarda.

console.log(dividir(10, 2));                   // 5  
// Chamamos a função nomeada “dividir” pelo próprio nome.

console.log(somaDeTresNumero(11, 2, 6));       // 19  
// Chamamos a função nomeada “somaDeTresNumero” passando três argumentos.

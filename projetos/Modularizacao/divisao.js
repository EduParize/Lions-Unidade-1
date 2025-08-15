function divisao(num1, num2) {
  if (num2 == 0) {
    let mensagem = "Divisao por zero nao eh possivel!";
    return mensagem;
  } else {
    return num1 / num2;
  }
}

module.exports = divisao;

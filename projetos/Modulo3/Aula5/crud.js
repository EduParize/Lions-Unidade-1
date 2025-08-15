const { clear } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let maiorSalario = {
  nome: "",
  cargo: "",
  salario: 0,
};
let menorSalario = {
  nome: maiorSalario.nome,
  cargo: maiorSalario.cargo,
  salario: maiorSalario.salario,
};

let funcionarios = [];

function iniciar(){
  funcionarios = []; // Esta é a linha mágica!
  exibirMenu()
}

function exibirMenu() {
  console.log("-------------------------------------");
  console.log(
    "Menu:\n1-Cadastrar funcionarios\n2-Listar funcionarios\n3-Deletar funcionario\n4-Maior e Menor salario\n5-Sair"
  );
  rl.question("Insira qual a sua opcao: ", (opcao) => {
    opcao = parseInt(opcao);
    switch (opcao) {
      case 1:
        console.clear();
        cadastrarUsuario();
        break;
      case 2:
        console.clear();
        listarUsuario();
        break;
      case 3:
        console.clear();
        deletarUsuario();
        break;
      case 4:
        console.clear();
        maiorEmenor();
        break;
      case 5:
        console.clear();
        rl.close();
        break;
      default:
        console.clear();
        exibirMenu();
        break;
    }
  });
}

function cadastrarUsuario() {
  rl.question("Insira o nome do funcionario: ", (nome) => {
    rl.question("Insira o cargo do funcionario: ", (cargo) => {
        inserirSalario(nome, cargo)
    });
  });
}

function inserirSalario(nome, cargo) {
  rl.question("Insira o salario do funcionario: ", (salario) => {
    salario = parseFloat(salario);
    if (salario <= 0 || isNaN(salario)) {
      console.clear();
      console.log("Salario invalido!");
      return inserirSalario(nome, cargo);
    } else {
      const Funcionarios = {
        nome: nome,
        salario: salario,
        cargo: cargo,
      };

      funcionarios.push(Funcionarios);
      console.clear();
      console.log("Funcionario Cadastrado!");
      exibirMenu();
    }
  });
}

function listarUsuario() {
  if (funcionarios.length == 0) {
    console.clear();
    console.log("Nenhum funcionario casdastrado!");
    exibirMenu();
  } else {
    console.clear();
    console.log("---Lista de Funcionarios---");
    funcionarios.forEach((func, index) => {
      console.log("-----------------------------");
      console.log(`ID: ${index + 1}`);
      console.log(`  Nome: ${func.nome}`);
      console.log(`  Cargo: ${func.cargo}`);
      console.log(`  Salário: ${func.salario}`);
    });
    exibirMenu();
  }
}

function deletarUsuario() {
  funcionarios.forEach((func, index) => {
    console.log(`${index + 1}: ${func.nome} - ${func.cargo}`);
  });
  console.log("-------------------------------------");
  rl.question("Qual usuario gostaria de deletar?", (deletar) => {
    deletar = parseInt(deletar);
    if (deletar > funcionarios.length || deletar <= 0) {
      console.clear();
      console.log("Funcionario invalido!");
      exibirMenu();
    } else {
      funcionarios.splice(deletar - 1, 1);
      console.clear();
      console.log("Usuario deletado com sucesso!");
      exibirMenu();
    }
  });
}

function maiorEmenor() {
  if (funcionarios.length == 0) {
    console.log("Nenhum funcionario cadastrado!");
    exibirMenu();
  } else {
    maiorSalario = funcionarios[0];
    menorSalario = funcionarios[0];

    for (let i = 0; i < funcionarios.length; i++) {
      if (funcionarios[i].salario > maiorSalario.salario) {
        maiorSalario = funcionarios[i];
      } else {
        if (funcionarios[i].salario < menorSalario.salario) {
          menorSalario = funcionarios[i];
        }
      }
    }

    console.log("-----------------------------");
    console.log(
      `O menor salario eh do funcionario ${menorSalario.nome} que recebe ${menorSalario.salario} reais`
    );
    console.log("-------------------------------------");
    console.log(
      `O maior salario eh do funcionario ${maiorSalario.nome} que recebe ${maiorSalario.salario} reais`
    );
    exibirMenu();
  }
}
iniciar();

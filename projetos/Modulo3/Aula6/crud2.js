const { clear } = require("console");
const { parse } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//  Acervos jogadores que passaram no Palmeiras

let jogadores = [];
function exibirMenu() {
  console.log("-------------------------------------");
  console.log(
    "Menu:\n1-Cadastrar jogador\n2-Listar jogadores\n3-Deletar jogador\n4-Editar jogador\n5-Top 3 maiores artilheiros\n6-Filtrar pesquisa de jogadores\n0-Sair"
  );
  rl.question("Insira qual a sua opcao: ", (opcao) => {
    opcao = parseInt(opcao);
    switch (opcao) {
      case 1:
        console.clear();
        cadastrarJogador();
        break;
      case 2:
        console.clear();
        listarJogador();
        break;
      case 3:
        console.clear();
        deletarJogador();
        break;
      case 4:
        console.clear();
        editarJogador(jogadores);
        break;
      case 5:
        console.clear();
        artilharia();
        break;
      case 6:
        console.clear();
        filtrarJogador();
        break;
      case 0:
        console.clear();
        rl.close();
        break;
      default:
        console.clear();
        console.log("Opcao invalida, insira uma corretamente!");
        exibirMenu();
        break;
    }
  });
}

function cadastrarJogador() {
  rl.question("Insira o nome do jogador que deseja cadastrar: ", (nome) => {
    console.clear();
    cadastrarPosicao(nome);
  });
}

function goals(nome, posicao) {
  rl.question(
    "Insira quantos gols esse jogador possui pelo Palmeiras: ",
    (gols) => {
      gols = parseInt(gols);
      if (isNaN(gols) || gols < 0) {
        console.clear();
        console.log("Numero de gols invalido, insira novamente!");
        goals(nome, posicao);
      } else {
        console.clear();
        tempoDeClubeChegada(nome, posicao, gols);
      }
    }
  );
}

function tempoDeClubeChegada(nome, posicao, gols) {
  rl.question(
    `Insira qual foi o ano de chegada na passagem: `,
    (anoChegada) => {
      anoChegada = parseInt(anoChegada);
      if (isNaN(anoChegada) || anoChegada <= 0) {
        console.clear();
        console.log("Valor de ano invalido, insira novamente!");
        tempoDeClubeChegada(nome, posicao, gols);
      } else {
        console.clear();
        tempoDeClubeEncerramento(nome, posicao, gols, anoChegada);
      }
    }
  );
}

function tempoDeClubeEncerramento(nome, posicao, gols, anoChegada) {
  rl.question(
    `Insira qual foi o ano de encerramento na passagem: `,
    (anoEncerramento) => {
      anoEncerramento = parseInt(anoEncerramento);
      if (isNaN(anoEncerramento) || anoEncerramento <= 0) {
        console.log("Valor de ano invalido, insira novamente!");
        tempoDeClubeEncerramento(nome, posicao, gols, anoChegada);
      } else {
        const Jogador = {
          nome: nome,
          posicao: posicao,
          gols: gols,
          tempoInicio: anoChegada,
          tempoFim: anoEncerramento,
        };
        jogadores.push(Jogador);
      }
      console.clear();
      console.log("Jogador cadastrado com sucesso!");
      exibirMenu();
    }
  );
}

function listarJogador() {
  if (jogadores.length == 0) {
    console.clear();
    console.log("Nenhum jogador casdastrado!");
    exibirMenu();
  } else {
    console.clear();
    console.log("---Lista de Jogadores---");
    jogadores.forEach((func) => {
      console.log("-----------------------------");
      console.log(`  Nome: ${func.nome}`);
      console.log(`  Posicao: ${func.posicao}`);
      console.log(`  Gols: ${func.gols}`);
      console.log(`  Tempo de Clube: ${func.tempoInicio} - ${func.tempoFim}`);
    });
    exibirMenu();
  }
}

function cadastrarPosicao(nome) {
  console.log("1-Atacante\n2-Meio campo\n3-Zagueiro\n4-Lateral\n5-Goleiro");
  rl.question("Insira a posicao que este jogador jogava: ", (posicaoInput) => {
    posicaoInput = parseInt(posicaoInput);
    switch (posicaoInput) {
      case 1:
        posicao = "Atacante";
        console.clear();
        goals(nome, posicao);

        break;
      case 2:
        posicao = "Meio campo";
        console.clear();
        goals(nome, posicao);

        break;
      case 3:
        posicao = "Zagueiro";
        console.clear();
        goals(nome, posicao);

        break;
      case 4:
        posicao = "Lateral";
        console.clear();
        goals(nome, posicao);
        break;
      case 5:
        posicao = "Goleiro";
        console.clear();
        goals(nome, posicao);
        break;
      default:
        console.clear();
        console.log("Insira uma opcao valida!");
        cadastrarPosicao(nome);
        break;
    }
  });
}

function deletarJogador() {
  jogadores.forEach((func, index) => {
    console.log(`${index + 1}- ${func.nome}`);
  });
  rl.question("Insira qual jogador voce deseja deletar: ", (deletarOpcao) => {
    deletarOpcao = parseInt(deletarOpcao);
    if (
      isNaN(deletarOpcao) ||
      deletarOpcao > jogadores.length ||
      deletarOpcao <= 0
    ) {
      console.clear();
      console.log("Opcao invalida, insira novamente!");
      deletarJogador();
    } else {
      console.clear;
      console.log("Jogador deletado!");
      jogadores.splice(deletarOpcao - 1, 1);
      exibirMenu();
    }
  });
}

function editarJogador() {
  jogadores.forEach((func, index) => {
    console.log(`${index + 1}- ${func.nome}`);
  });
  rl.question("Insira qual jogador voce quer editar: ", (editarOpcao) => {
    editarOpcao = parseInt(editarOpcao);
    if (
      isNaN(editarOpcao) ||
      editarOpcao > jogadores.length ||
      editarOpcao <= 0
    ) {
      console.clear();
      console.log("Opcao invalida, insira novamente!");
      editarJogador();
    } else {
      console.clear;
      editarOpcao--;
      jogador = jogadores[editarOpcao];
      console.log(`Editando ${jogador.nome}`);
      console.log(
        "O que você deseja editar?\n1- Nome\n2- Gols\n3- Ano de Inicio\n4- Ano de Encerramento\n0- Cancelar"
      );
      rl.question("Insira a sua opcao: ", (editarEscolha) => {
        switch (parseInt(editarEscolha)) {
          case 1:
            rl.question(
              `Insira o novo nome (anterior: ${jogador.nome}): `,
              (novoNome) => {
                jogador.nome = novoNome;
                exibirMenu();
              }
            );

            break;
          case 2:
            rl.question(
              `Insira a nova quantidade de gols (anterior: ${jogador.gols}): `,
              (novosGols) => {
                if (!isNaN(novosGols) && novosGols >= 0) {
                  jogador.gols = novosGols;
                }
                exibirMenu();
              }
            );

            break;

          case 3:
            rl.question(
              `Insira o novo ano de encerramento (anterior: ${jogador.tempoInicio}): `,
              (novoAnoInicio) => {
                if (!isNaN(novoAnoInicio) && novoAnoInicio >= 0) {
                  jogador.tempoInicio = novoAnoInicio;
                }
                exibirMenu();
              }
            );
            break;
          case 4:
            rl.question(
              `Insira o novo ano de encerramento (anterior: ${jogador.tempoFim}): `,
              (novoAnoFim) => {
                if (!isNaN(novoAnoFim) && novoAnoFim >= 0) {
                  jogador.tempoFim = novoAnoFim;
                }
                exibirMenu();
              }
            );

            break;
          case 0:
            break;
          default:
            console.log("Opção de edição inválida.");
            editarJogador();
            break;
        }
      });
    }
  });
}

function filtrarJogador() {
  rl.question(
    "Qual atributo voce quer filtar: \n1-nome\n2-posicao\n3-quantidade de gols\n4-ano de chegada\n5-ano de saida\n0-Sair\n",
    (filtroEscolha) => {
      filtroEscolha = parseInt(filtroEscolha);
      switch (filtroEscolha) {
        case 1:
          filtro = "nome";
          filtrarNome(filtro);
          break;
        case 2:
          filtro = "posicao";
          filtrarPosicao(filtro);
          break;
        case 3:
          filtro = "quantidade de gols";
          filtrarGols(filtro);
          break;
        case 4:
          filtro = "ano de chegada";
          filtrarTempoChegada(filtro);
          break;
        case 5:
          filtro = "ano de saida";
          filtrarTempoFim(filtro);
          break;
        case 0:
          console.log("Opcao invalida, insira novamente!");
          filtrarJogador();
          break;
      }
    }
  );
}
function filtrarNome(filtro) {
  console.clear()
  rl.question(
    `Qual eh o filtro de ${filtro} que deseja aplicar? `,
    (filtroInput) => {
      const jogadorBuscado = jogadores.filter(
        (player) => player.nome == filtroInput
      );
      console.log(jogadorBuscado);
      exibirMenu();
    }
  );
}
function filtrarPosicao(filtro) {
  console.clear()
  rl.question(
    `Qual eh o filtro de ${filtro} que deseja aplicar? `,
    (filtroInput) => {
      const jogadorBuscado = jogadores.filter(
        (player) => player.posicao == filtroInput
      );
      console.log(jogadorBuscado);
      exibirMenu();
    }
  );
}

function filtrarGols(filtro) {
  console.clear()
  rl.question(
    "1-Superior\n2-Inferior\n0-Sair\nDeseja filtrar com quanto superior ou inferior? ",
    (filtroSwitch) => {
      filtroSwitch = parseInt(filtroSwitch);
      switch (filtroSwitch) {
        case 1:
          rl.question(
            `Qual eh o filtro de ${filtro} que deseja aplicar? `,
            (filtroInput) => {
              const jogadorBuscado = jogadores.filter(
                (player) => player.gols >= filtroInput
              );
              console.log(jogadorBuscado);
              exibirMenu();
            }
          );
          break;
        case 2:
          rl.question(
            `Qual eh o filtro de ${filtro} que deseja aplicar? `,
            (filtroInput) => {
              const jogadorBuscado = jogadores.filter(
                (player) => player.gols <= filtroInput
              );
              console.log(jogadorBuscado);
              exibirMenu();
            }
          );
          break;
        case 0:
          console.clear()
          exibirMenu();
          break;
        default:
          console.clear()
          console.log("Insira um valor valido!");
          filtrarGols();
          break;
      }
    }
  );
}

function filtrarTempoChegada(filtro) {
  console.clear()
  rl.question(
    `Qual eh o filtro de ${filtro} que deseja aplicar? `,
    (filtroInput) => {
      const jogadorBuscado = jogadores.filter(
        (player) => player.tempoInicio == filtroInput
      );
      console.log(jogadorBuscado);
      exibirMenu();
    }
  );
}

function filtrarTempoFim(filtro) {
  console.clear()
  rl.question(
    `Qual eh o filtro de ${filtro} que deseja aplicar? `,
    (filtroInput) => {
      const jogadorBuscado = jogadores.filter(
        (player) => player.tempoFim == filtroInput
      );
      console.log(jogadorBuscado);
      exibirMenu();
    }
  );
}

exibirMenu();

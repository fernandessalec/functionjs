// Criamos um aluno com nome e notas vazias
let aluno = {
    nome: "João",
    notas: []
  };
  
  // Função para cadastrar uma nota no aluno
  function cadastrarNota(aluno, nota) {
    aluno.notas.push(nota);
  }
  
  // Função para calcular a média das notas do aluno
  function calcularMedia(aluno) {
    let soma = 0;
    for (let i = 0; i < aluno.notas.length; i++) {
      soma += aluno.notas[i];
    }
    return soma / aluno.notas.length;
  }
  
  // Função para verificar se a média é suficiente para ser aprovado
  function verificarAprovacao(media) {
    return media >= 7; // Aprovado se média for 7 ou mais
  }
  
  // Função para mostrar o resultado
  function exibirResultado(aluno, media, aprovado) {
    alert(`Aluno: ${aluno.nome}`);
    alert(`Notas: ${aluno.notas.join(", ")}`);
    alert(`Média: ${media.toFixed(2)}`);
    alert(aprovado ? "Situação: Aprovado 🎉" : "Situação: Reprovado 😞");
  }
  
  // Exemplo de uso:
  cadastrarNota(aluno, 8);
  cadastrarNota(aluno, 6);
  cadastrarNota(aluno, 9);
  
  let media = calcularMedia(aluno);
  let aprovado = verificarAprovacao(media);
  exibirResultado(aluno, media, aprovado);
  
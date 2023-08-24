class filmes{
  constructor (titulo, ano, genero, duracao, assistido) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.duracao = duracao;
    this.assistido = assistido;
    this.avaliacao = 0;
    }

   show(){
    if(this.assistido){
        console.log(`Filme: ${this.titulo}.\ Ano: ${this.ano}.\ Genero: ${this.genero}.\ Duracao: ${this.duracao} min.\ Avaliação: ${this.avaliacao}.\ Filme ja assistido`)
    }
    else{
        console.log(`Filme: ${this.titulo}.\ Ano: ${this.ano}.\ Genero: ${this.genero}.\ Duracao: ${this.duracao} min.\ Avaliação: ${this.avaliacao}.`)
    }
   }

   filmeAssistido(){
    this.assistido=true;
    console.log(`filme ${this.titulo} assistido`)
   }

   avaliar(nota){
    this.avaliacao = nota;
    console.log(`Avaliação ${this.avaliacao} atribuido ao filme ${this.titulo}`)
   }

}

const readline = require('readline-sync');

function addFilme(){
  var nome = readline.question("Nome do filme: ")
  var ano = readline.question("Lancamento do filme: ")
  var genero = readline.question("Genero: ")
  var tempo = readline.question("Duracao: ")

  filme = new filmes(nome,ano,genero,tempo,false)
  lista_de_filmes.push(filme);
  console.log("Filme adicionado com sucesso")
}

function exibir(){
  if(lista_de_filmes.length > 0){
    for (let i = 0; i < lista_de_filmes.length; i++) {
      lista_de_filmes[i].show();
    }
  }
  else{
    console.log("Nenhum filme adicionado!")
  }
}

function showList(){
  for (let i = 0; i < lista_de_filmes.length; i++) {
    console.log(`${i+1} - ${lista_de_filmes[i].titulo}`);
  }
}

function assistido(){
  showList()
  var op = readline.questionInt("Qual filme vc assistiu? ");
  lista_de_filmes[op-1].assistido=true;
  console.log("Filme marcado como assistido");
}

function avaliar(){
  showList()
  var op = readline.questionInt("Qual filme vc quer avaliar? ");
  var nota = readline.questionFloat(`Qual nota vc quer da pro filme? (0 - 10) ${lista_de_filmes[op-1].titulo} `);
  if(nota < 0 && nota < 10){
    lista_de_filmes[op-1].avaliacao=nota;
    console.log(`filme ${lista_de_filmes[op-1].titulo} avaliado com ${nota}/10`)
  }
  else{
    console.log("valor de nota invalido!")
  }
}

function mostraOP(){
  var linha = "-".repeat(50);
  console.log(linha)
  console.log("1 - Adicionar filme novo")
  console.log("2 - Marcar filme como assistido")
  console.log("3 - Avaliar um filme")
  console.log("4 - Exibir lista de filmes")
  console.log("5 - Sair")
  console.log(linha)
}



var lista_de_filmes = [];
var x = true;
var op;


while(x){

  mostraOP();
  op = readline.question("Comando: ")

  switch(op){
    case '1':
      addFilme();
      break;

    case '2':
      assistido()  
      break;

    case '3':
      avaliar();
      break;

    case '4': 
      exibir();
      break;

    case '5':
      x = false;
      break;

    default:
      console.log("Opção invalida!") ;
      break;      
  }
}
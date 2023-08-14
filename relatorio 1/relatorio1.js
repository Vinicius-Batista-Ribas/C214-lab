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
        console.log(`Filme: ${this.titulo}.\ Ano: ${this.ano}.\ Genero: ${this.genero}.\ Avaliação: ${this.avaliacao}.\ Filme ja assistido`)
    }
    else{
        console.log(`Filme: ${this.titulo}.\ Ano: ${this.ano}.\ Genero: ${this.genero}.\ Avaliação: ${this.avaliacao}.`)
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


const filme1 = new filmes('Your Name','2016','romance','107', false);
const filme2 = new filmes('Dungeons & Dragons','2023','comedio','112', false);
const filme3 = new filmes('heroes rising','2019','ação/aventura','104', false);

filme1.show();
filme1.filmeAssistido();
filme1.avaliar(96);

filme2.show();
filme2.avaliar(76);
filme2.filmeAssistido();

filme3.show();
filme3.filmeAssistido();
filme3.avaliar(88);

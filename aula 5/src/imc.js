function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

function calculaDano(dados, face){
    var dano = 0;
    if (dados === 0){
        return 'Error';
    }
    if (face < 2){
        return 'Error'
    }
    for ( let i = 0; i < dados; i++){
       dano += Math.floor(Math.random() * face) + 1;
    }
    return dano;
}
module.exports = { calcularIMC ,calculaDano}; // Exporta a função calcularIMC

const { expect } = require('chai');
const { calcularIMC, calculaDano } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });



  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });
});

describe('Calcula dano', () => {
    it('Sucesso no dano', () =>{
        const face = 20; //D20
        const dados = 3; // 3 dados 

        dano = calculaDano(dados, face)
        expect(dano).to.lessThanOrEqual(dados*face);
        expect(dano).to.greaterThanOrEqual(1);
    });

    it('Dados igual a zero', () =>{
        const face = 20; //D20
        const dados = 0; // 3 dados 

        dano = calculaDano(dados, face)
         expect(dano).to.equal('Error');
    });

    it('Dados faces menor que 2', () =>{
        const face = 1; //D20
        const dados = 3; // 3 dados 

        dano = calculaDano(dados, face)
         expect(dano).to.equal('Error');
    });
});
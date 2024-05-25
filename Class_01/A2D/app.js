function calcularImc(peso, altura) {
    return peso / (altura * altura);

}

media = calcularImc (60,1.75);
console.log(media);

function calcularFatorial(valor1) {
    if (valor1 === 0 || valor1 ===1) {
    return 1;
}
    let fatorial = 1;
    for(let i = 1; i <= valor1; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let valor1 = 7;
let resultado1 = calcularFatorial(valor1);
console.log(`O fatorial de ${valor1} é ${resultado1}`);


function converterReal(valorDolar){
    let cotacaoDolar = 4.80;
    let valorReal = valorDolar * cotacaoDolar;
    return valorReal.toFixed(2);

}

let valorDolar = 34;
let real = converterReal(valorDolar);
console.log(`Você possui ${valorDolar} Dollares que irão ser convertidos em ${real} reais `);


function calcularAreaEPerimetro(valorLateral1) {
    let i = 4;
    let area = valorLateral1 * valorLateral1;
    let perimetro = valorLateral1 * i;

    console.log(`O perimetro é ${perimetro} e a area é ${area}`);
}

let valorLateral1 = 5;
calcularAreaEPerimetro(valorLateral1);

function calcularCirculo(raio) {
    let areaC = 3.14 * raio * raio;
    let perimetroC1 = Math.PI * raio;
    let perimetroC2 = perimetroC1 * perimetroC1;

    console.log(`O perimetro é ${perimetroC2.toFixed(2)} e a area é ${areaC.toFixed(2)}`);
}

let raio = 5;
calcularCirculo(raio);



function tabuada(numero) {
    for(let i = 1; i <= 10; i++) {
    let multiplicadorResultado = numero * i;
    console.log(`${numero} multiplicado por ${i} é igual a ${multiplicadorResultado}`);
    }
}

let numero = 7;
tabuada(numero);
function exibirOla() {
    console.log('Olá mundo');
}

exibirOla();

function exibirNome(nome) {
    console.log(`Olá ${nome}`);
}

exibirNome('Mikael');

function dobro(number) {
    return number * 2;
}

let resultado1 = dobro(5);
console.log(resultado1);

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

let media = calcularMedia(3, 6, 12);
console.log(media);

function encontrarMaior(valor1, valor2) {
    return valor1 > valor2 ? valor1 : valor2;
}

let maiorNumero = encontrarMaior(4, 8);
console.log(maiorNumero);

function exibirMultiplicador(valor3) {
    return valor3 * valor3;
}

let multiplicador = exibirMultiplicador(68);
console.log(multiplicador);
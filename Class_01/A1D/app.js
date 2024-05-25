let welcome = 'Boas Vindas.';
console.log(welcome);

let nome = 'Olá Mikael';
console.log(nome);

let name = 'Mikael';
alert (`Boas vindas ${name}`);

let lingua = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(lingua);

let valor1 = 500;
let valor2 = 300;
let valor3 = valor1 + valor2;
alert(`A soma de ${valor1} e ${valor2} é ${valor3}`);

let valor4 = 465;
let valor5 = 327;
let valor6 = valor4 - valor5;
alert(`A soma de ${valor4} e ${valor5} é ${valor6}`);

let idade = prompt("digite sua idade:");
if (idade => 18) {
    console.log('É de maior');
} else {
    console.log('é de menor');
}

let maioridade = idade > 17 ? 'Maior de idade' : 'Menor de idade';
alert (`Você possui ${idade}, logo você é ${maioridade}`);

let number = prompt('Digite um numero;');
if (number < 0) {
    console.log('é negativo');
} else if (number == 0) {
    console.log('é neutro');
} else {
    console.log('é positivo');
}

let contagem = 0;
while (contagem < 11) {
    console.log(contagem);
    contagem ++;
}

let nota = prompt('Qual foi sua nota?');
if (nota < 7) {
    console.log('reprovado');
} else {
    console.log('aprovado');
}

let numRandom = parseInt(Math.random() * 150);
console.log(numRandom);

let numRandom2 = parseInt(Math.random() * 10 + 1);
console.log(numRandom2);

let numRandom3 = parseInt(Math.random() * 1000 + 1);
console.log(numRandom3);
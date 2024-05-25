let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do Desafio.';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');
}

function alerta() {
    console.log('Eu amo JS');
}

function exibirPrompt() {
    let cidade = prompt('Qual o nome de sua cidade?');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma() {
    let num1 = parseInt(prompt('Digite um valor:'));
    let num2 = parseInt(prompt('Digite outro valor valor:'));
    let soma = num1 + num2;
    alert(`A Soma de ${num1} e ${num2} é igual ${soma}.`);
}
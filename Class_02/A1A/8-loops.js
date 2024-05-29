console.log(`Trabalhando com loop`);

const listaDestino = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possíveis:");
console.log(listaDestino);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
  if (listaDestino[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log("Destino existe", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa Viagem");
} else {
  console.log("Desculpe, tivemos um erro!");
}

for (let cont = 0; cont < 3; cont++) {
  if (listaDestino[contador] == destino) {
    destinoExiste = true;
  }
}

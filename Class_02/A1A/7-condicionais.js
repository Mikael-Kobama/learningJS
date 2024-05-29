console.log(`Trabalhando com condicionais`);

const listaDestino = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDestino);

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa Viagem");
  listaDestino.splice(1, 1);
} else {
  console.log("Não é um comprador maior de idade e não vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem")
} else {
    console.log("Você não pode embarcar")
}

console.log(listaDestino);

console.log("Trabalhando com listas");

// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio De Janeiro";
//console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);

listaDestino.push(`Curitiba`);

const listaDeDestinos = ["Salvador", "São Paulo", "Rio De Janeiro"];
console.log(listaDeDestinos);
console.log("Destinos possíveis:");

listaDestino.splice(1, 1);
console.log(listaDestino);
console.log(listaDestino[1]);

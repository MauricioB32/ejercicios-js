const prompt = require("prompt-sync")();

let distancia = parseFloat(prompt("Distancia en km: "));
let dias = parseInt(prompt("Días de estancia: "));

let precio = distancia * 2.5;

if (dias > 7 && distancia > 800) {
    precio *= 0.7;
}

console.log("Precio final: " + precio);
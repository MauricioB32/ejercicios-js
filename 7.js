const prompt = require('prompt-sync')();

let distancia = Number(prompt("Ingresa la distancia en km: "));
let dias = Number(prompt("Ingresa los días de estancia: "));

let precioPorKm = 2.5;
let precioTotal = distancia * 2 * precioPorKm; // ida y vuelta

if (dias > 7 && distancia > 800) {
    let descuento = precioTotal * 0.30;
    precioTotal = precioTotal - descuento;
    console.log("Tiene descuento del 30%");
}

console.log("El precio del billete de ida y vuelta es: " + precioTotal + " euros");
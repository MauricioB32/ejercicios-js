const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));

if (num1 > num2) {
    console.log("El primer número es el mayor");
} else if (num1 < num2) {
    console.log("El primer número es el más pequeño");
} else {
    console.log("Los dos números son iguales");
}
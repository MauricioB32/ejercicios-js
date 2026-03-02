const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Ingrese el primer número: "));
let b = parseFloat(prompt("Ingrese el segundo número: "));

if (a > b) {
    console.log("El mayor es: " + a);
} else {
    console.log("El mayor es: " + b);
}
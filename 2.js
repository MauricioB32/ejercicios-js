const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Número 1: "));
let b = parseFloat(prompt("Número 2: "));
let c = parseFloat(prompt("Número 3: "));

if (a >= b && a >= c) {
    console.log("El mayor es: " + a);
} else if (b >= a && b >= c) {
    console.log("El mayor es: " + b);
} else {
    console.log("El mayor es: " + c);
}
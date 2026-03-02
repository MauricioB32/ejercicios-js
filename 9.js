const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Número 1: "));
let b = parseFloat(prompt("Número 2: "));

if (a > b) console.log("El primer número es mayor");
else if (a < b) console.log("El primer número es menor");
else console.log("Son iguales");
const prompt = require("prompt-sync")();

let a = parseInt(prompt("Número 1: "));
let b = parseInt(prompt("Número 2: "));

if (a % b === 0) console.log("Es divisor");
else console.log("No es divisor");
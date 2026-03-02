const prompt = require("prompt-sync")();

let a = parseInt(prompt("Número 1: "));
let b = parseInt(prompt("Número 2: "));
let c = parseInt(prompt("Número 3: "));

if (a <= b && b <= c) console.log("Están en orden ascendente");
else console.log("No están en orden");
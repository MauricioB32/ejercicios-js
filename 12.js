const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Número 1: "));
let b = parseFloat(prompt("Número 2: "));
let op = parseInt(prompt("Seleccione 1=Suma, 2=Resta: "));

if (op === 1) console.log(a + b);
else if (op === 2) console.log(a - b);
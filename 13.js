const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Número 1: "));
let b = parseFloat(prompt("Número 2: "));
let codigo = parseInt(prompt("1=Suma, 2=Multiplica, 3=Divide: "));

if (codigo === 1) console.log(a + b);
else if (codigo === 2) console.log(a * b);
else if (codigo === 3) console.log(a / b);
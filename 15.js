const prompt = require("prompt-sync")();

let c = prompt("Ingrese un carácter: ");

if (/[a-zA-Z]/.test(c)) console.log("Alfabético");
else if (/[0-9]/.test(c)) console.log("Dígito");
else console.log("Especial");
const prompt = require("prompt-sync")();

let num = parseInt(prompt("Ingrese un número: "));

if (num % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}
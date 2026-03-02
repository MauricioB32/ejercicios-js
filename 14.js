const prompt = require("prompt-sync")();

let num = parseInt(prompt("Ingrese un número: "));

if (num >= 30 || num < 0) {
    console.log("Mayor o igual a 30 o negativo");
} else if (num === 0) {
    console.log("Cero");
} else if (num === 1) {
    console.log("Unidad");
} else {
    console.log("Número entre 2 y 29");
}
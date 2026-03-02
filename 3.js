const prompt = require("prompt-sync")();

let nota = parseFloat(prompt("Ingrese la nota: "));

if (nota > 100) {
    console.log("Alta");
} else {
    console.log("Baja");
}
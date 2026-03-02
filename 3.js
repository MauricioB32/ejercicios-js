const prompt = require('prompt-sync')();

let nota = Number(prompt("Ingresa la nota: "));

if (nota > 100) {
    console.log("Alta");
} else if (nota < 100) {
    console.log("Baja");
} else {
    console.log("La nota es exactamente 100");
}
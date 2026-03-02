const prompt = require("prompt-sync")();

let angulo = parseFloat(prompt("Ingrese el ángulo: "));

if (angulo < 90) console.log("Agudo");
else if (angulo === 90) console.log("Recto");
else console.log("Obtuso");
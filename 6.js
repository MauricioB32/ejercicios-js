const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Ingrese el peso: "));

if (peso < 40) console.log("Menos de 40kg");
else if (peso < 50) console.log("Entre 40 y 50kg");
else if (peso < 60) console.log("Entre 50 y 60kg");
else console.log("60kg o más");
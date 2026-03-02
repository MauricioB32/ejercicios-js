const prompt = require("prompt-sync")();

let mes = parseInt(prompt("Mes (1-12): "));
let año = parseInt(prompt("Año: "));

let dias = new Date(año, mes, 0).getDate();
console.log("Días del mes: " + dias);
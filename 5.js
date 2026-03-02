const prompt = require("prompt-sync")();

let dia = parseInt(prompt("Día: "));
let mes = parseInt(prompt("Mes: "));
let año = parseInt(prompt("Año: "));

let fecha = new Date(año, mes - 1, dia);
fecha.setDate(fecha.getDate() + 1);

console.log("Fecha siguiente: " + fecha.toLocaleDateString());
const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Número 1: "));
let b = parseFloat(prompt("Número 2: "));

console.log("El menor es: " + (a < b ? a : b));
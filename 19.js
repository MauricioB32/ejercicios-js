const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Número 1: "));
let b = parseFloat(prompt("Número 2: "));
let op = prompt("Operación (+, -, *, /, %): ");

switch (op) {
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": console.log(a / b); break;
    case "%": console.log(a % b); break;
    default: console.log("Operación inválida");
}
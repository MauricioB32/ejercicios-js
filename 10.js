const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));

if (num1 % num2 === 0) {
    console.log(num2 + " Es divisor de " + num1);
} else if (num2 % num1 === 0) {
    console.log(num1 + " Es divisor de " + num2);
} else {
    console.log("Ninguno es divisor del otro");
}
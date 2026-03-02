const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));

if (num1 < num2) {
    console.log("El número menor es: " + num1);
} else if (num2 < num1) {
    console.log("El número menor es: " + num2);
} else {
    console.log("Los dos números son iguales: " + num1);
}
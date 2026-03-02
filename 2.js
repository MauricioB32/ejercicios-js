const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let num3 = Number(prompt("Ingresa el tercer número: "));

if (num1 > num2 && num1 > num3) {
    console.log("El número mayor es: " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("El número mayor es: " + num2);
} else if (num3 > num1 && num3 > num2) {
    console.log("El número mayor es: " + num3);
} else {
    console.log("Algunos números son iguales");
}
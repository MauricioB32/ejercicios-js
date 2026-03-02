const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingrese el primer numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));

if (num1 > num2){
    console.log("El numero mayor es: " + num1);
} else if (num2 > num1){
    console.log("El numero mayor es:" + num2);
} else{
    console.log("Los numeros son iguales");
}

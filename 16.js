const prompt = require('prompt-sync')();

let mes = Number(prompt("Ingresa el número del mes (1-12): "));
let anio = Number(prompt("Ingresa el año: "));

if (mes === 2) {
    if (anio % 4 === 0) {
        console.log("El mes tiene 29 días (año bisiesto)");
    } else {
        console.log("El mes tiene 28 días");
    }
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("El mes tiene 30 días");
} else if (mes >= 1 && mes <= 12) {
    console.log("El mes tiene 31 días");
} else {
    console.log("Mes inválido");
}
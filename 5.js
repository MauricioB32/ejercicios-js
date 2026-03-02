const prompt = require('prompt-sync')();

let dia = Number(prompt("Ingresa el día: "));
let mes = Number(prompt("Ingresa el mes (1-12): "));
let anio = Number(prompt("Ingresa el año: "));

// Días que tiene cada mes
let diasEnMes;

if (mes === 2) {
    // Año bisiesto
    if (anio % 4 === 0) {
        diasEnMes = 29;
    } else {
        diasEnMes = 28;
    }
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    diasEnMes = 30;
} else {
    diasEnMes = 31;
}

// Calcular día siguiente
if (dia < diasEnMes) {
    dia = dia + 1;
} else if (mes < 12) {
    dia = 1;
    mes = mes + 1;
} else {
    dia = 1;
    mes = 1;
    anio = anio + 1;
}

console.log("La fecha del día siguiente es: " + dia + "/" + mes + "/" + anio);
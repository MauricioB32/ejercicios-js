const prompt = require('prompt-sync')();

let angulo = Number(prompt("Ingresa el ángulo en grados: "));

if (angulo < 90) {
    console.log("El ángulo es AGUDO");
} else if (angulo === 90) {
    console.log("El ángulo es RECTO");
} else {
    console.log("El ángulo es OBTUSO");
}
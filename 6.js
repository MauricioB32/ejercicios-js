const prompt = require('prompt-sync')();

let peso = Number(prompt("Ingresa el peso del alumno en kg: "));

if (peso < 40) {
    console.log("El alumno está en el grupo de: menos de 40 kg");
} else if (peso >= 40 && peso <= 50) {
    console.log("El alumno está en el grupo de: entre 40 y 50 kg");
} else if (peso > 50 && peso < 60) {
    console.log("El alumno está en el grupo de: más de 50 kg y menos de 60 kg");
} else {
    console.log("El alumno está en el grupo de: 60 kg o más");
}
const prompt = require('prompt-sync')();

let caracter = prompt("Ingresa un carácter: ");

if ((caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')) {
    console.log("Es un carácter ALFABÉTICO");
} else if (caracter >= '0' && caracter <= '9') {
    console.log("Es un DÍGITO");
} else if (caracter === '.' || caracter === ',' || caracter === ';' || caracter === ':' || caracter === '!' || caracter === '?') {
    console.log("Es un carácter de PUNTUACIÓN");
} else {
    console.log("Es un carácter ESPECIAL");
}
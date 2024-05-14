/*
Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. 
Ejemplo: Para "Ana" devolverá "A N A".
*/

function modificarPalabra1(palabra) {
    const palabraMod=[];
    for (let i=0; i<palabra.length; i++) {
        palabraMod.push(palabra[i].toUpperCase());
    }
    return alert(palabraMod.join(" "));
}

function modificarPalabra2(palabra) {
    return alert(palabra.toUpperCase().split('').join(" "));
}

//Buttons with prompts Ejercicio 1
const ej1ver1 = document.getElementById("ej1ver1");
ej1ver1.addEventListener('click', function() {
    const userInput = prompt("Escribe una palabra: ");
    return modificarPalabra1(userInput);
});
const ej1ver2 = document.getElementById("ej1ver2");
ej1ver2.addEventListener('click', function() {
    const userInput = prompt("Escribe una palabra: ");
    return modificarPalabra2(userInput);
});

/*
Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. 
Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
*/

function contarPalabras1(frase){
    let counter = 1;
    for (let i=0; i<frase.length; i++) {
        frase = frase.trim();
        if (frase[i] === " ") {
            counter++;
        }
    }
    alert(counter);
}

function contarPalabras2(frase){
    alert("Hay " + frase.trim().split(' ').length + " palabras.");
}

//Buttons with prompts Ejercicio 2
const ej2ver1 = document.getElementById("ej2ver1");
ej2ver1.addEventListener('click', function() {
    const userInput = prompt("Escribe una frase: ");
    return contarPalabras1(userInput);
});
const ej2ver2 = document.getElementById("ej2ver2");
ej2ver2.addEventListener('click', function() {
    const userInput = prompt("Escribe una frase: ");
    return contarPalabras2(userInput);
});
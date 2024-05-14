/*
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. 
Ejemplo: Para "Ana" devolverá "A N A".
*/

function modificarPalabra(palabra) {
    for (let i=0; i<palabra.length; i++) {
        console.log(palabra[i].toUpperCase());
    }
}

modificarPalabra("pablo germán");


/*
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. 
Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
*/



//  Escribir un programa que muestre por consola
//  los números del 1 al 100, sustituyendo los
//  múltiplos de 3 por la palabra “fizz”,
//  los múltiplos de 5 por “buzz” y los múltiplos
//  de ambos, es decir, los múltiplos de 3 y 5
//  (o de 15), por la palabra “fizzbuzz”.

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Fizzbuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}


// fizzbuzz()


// EJERCICIO 3
// Escribir una función que, dado un número de mes, devuelva la cantidad 
// de días de ese mes —suponiendo que no es un año bisiesto—.
let mes = 2
function cantidadDias(mes) {




    let date = new Date(2022, mes - 1, 0).getDate()
    console.log(date)
    console.log(date.getFullDate())
}


cantidadDias(mes)
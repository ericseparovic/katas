let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

const order = function (numeros) {
    for (let j = 0; j < numeros.length; j++) {

        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }


    return console.log(numeros)
}


order(numeros)
// Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.



const findVocals = function (string) {
    let phrase = string.toUpperCase().split("")
    let count = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] == "A" || phrase[i] == "E" || phrase[i] == "I" || phrase[i] == "O" || phrase[i] == "U") {
            count++

        }

    }

    return console.log(count)

}


findVocals("lucia")
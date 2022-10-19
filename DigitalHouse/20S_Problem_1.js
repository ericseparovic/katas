// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

const likes = [10, 4, 32, 1, 6, 90, 2]


const orderLikes = function (likes) {
    for (let i = 0; i < likes.length; i++) {
        for (let j = 0; j < likes.length; j++) {
            if (likes[j] > likes[j + 1]) {
                let temp = likes[j]
                likes[j] = likes[j + 1]
                likes[j + 1] = temp
            }

        }

    }

    return console.log(likes)
}


orderLikes(likes)
// Write a function that receives an array and only prints the values that are repeated


let array = [100, 3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

// Solution 1
const findRepeatedNumbers = function (array) {
    let repeatedNumers = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(repeatedNumers.indexOf(array[i]))

            if (array[i] == array[j] && i !== j && repeatedNumers.indexOf(array[i]) == -1) {
                repeatedNumers = [...repeatedNumers, array[j]]

            }

        }

    }
    return console.log(repeatedNumers)
}





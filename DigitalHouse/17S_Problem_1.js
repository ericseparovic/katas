// 1- Declare a variable that contains a 5*5 array filled with all positive

const createArray = function (row, column) {
    let array = []
    let count = 0;
    for (let i = 0; i < row; i++) {
        array[i] = [];
        for (let j = 0; j < column; j++) {
            array[i][j] = 1


            count++
        }

    }

    return array
}


// Sum all elements of a two-dimensional array  
const sumArray = function () {
    let array = createArray(5, 5)
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            total += array[i][j]

        }

    }
    return total;
}

console.log(sumArray())
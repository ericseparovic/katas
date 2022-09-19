// a) Create a funtion that adds  the values in diagonals from the initial position 0,0 to the final position
// b) Creare a funtion that adds the values in diagonals from the final position for example 1m 0.1 array 2x2 to the initial position



// 1- Create an array
const createArray = function (row, column) {
    let array = []
    let count = 1
    for (let i = 0; i < row; i++) {
        array[i] = []
        for (let j = 0; j < column; j++) {
            array[i][j] = 1
            count++
        }

    }


    return array

}


// a-  
const addDiagonalLeftRight = function () {
    let array = createArray(2, 2)
    let total = 0;
    console.table(array)
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i == j) total += array[i][j]
        }
    }

    return console.log(total);
}


// addDiagonalLeftRight()

// b- 
const addDiagonalRightLeft = function () {
    let array = createArray(5, 5)
    let j = array.length - 1
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i][j]
        j--
    }

    return console.log(total)
}


addDiagonalRightLeft()
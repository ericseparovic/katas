// Given an array, loop through its values and add only the numbers that are greater than or equal to 10 but less than 1000
const array = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];


const addArray = function (array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] >= 10 && array[i][j] < 1000) {
                total += array[i][j]
            }
        }

    }
    return console.log(total)


}


addArray(array)


// Write a Javascript function that inverts a number 
// For example if x = 32443 return 34423


const invertsNumber = function (number) {

    let invertedNumber = number.toString().split('').reverse().join("")

    return invertedNumber;
}


console.log(invertsNumber(100))
// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const calcSumSquare = () => {

    // The sum of the squares of the first ten natural numbers
    let sumSquare = 0;


    // The square of the sum of the first ten natural numbers
    let sumFirstNatural = 0;

    // The square of the sum of the first ten natural numbers
    let squareSum = 0;

    for (let i = 1; i <= 100; i++) {
        sumSquare += i ** 2
        sumFirstNatural += i

        squareSum = sumFirstNatural ** 2
    }

    return console.log(squareSum - sumSquare);


}


calcSumSquare()
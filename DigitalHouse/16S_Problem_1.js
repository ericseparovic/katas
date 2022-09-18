// Write a program than display the numbers from 1 to 100 on the  console. 
// Substituting multiples of 3 for "fizz"
// Substituting multiples of 5 for "buzz"
// Substituting multiples of 3 and 5 for "fizzbuzz"

const fizzbuzz = function () {
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


fizzbuzz()



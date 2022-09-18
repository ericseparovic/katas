// Problem 1 - Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

let number1 = 3;
let number2 = 5;
let range = 1000;

function multiples(number1, number2, range) {
  let sum = 0;
  for (i = 1; i < range; i++) {
    if (i % number1 == 0 || i % number2 == 0) {
      sum += i;
    }
  }

  console.log(sum);
}

multiples(number1, number2, range);

// SOLUTION
// 1) I create 3 variables number1, number2, range.
//    number1 and number2 are the values of the multiples.
//    range is up to where the funcion calculates the multiples

// 2) I create a funtion called multiples that takes 3 parameters, number1, number2, range

// 3) With a for loop I go through the  entire range of numbers and if number1 or number2 is a multiple I store the sum in the variable sum

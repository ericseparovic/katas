// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
function primeNumber(number) {
  for (let i = 1; i <= number; i++) {
    let countDividers = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        countDividers++;
      }
    }

    if (countDividers == 2) {
      if (number % i == 0) {
        console.log(i);
      }
    }
  }
}

primeNumber(600851475143);


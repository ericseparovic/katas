// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const prime10001st = (position) => {
  let numbersPrime = [];

  for (let i = 1; numbersPrime.length < position; i++) {
    let dividers = [];

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        dividers.push(j);
      }
    }

    if (dividers.length === 2) {
      numbersPrime.push(i);
    }
  }

  return numbersPrime[numbersPrime.length - 1];
};

let numbersPrime = prime10001st(10001);

console.log(numbersPrime);

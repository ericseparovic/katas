// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pythagorean = () => {
  let result;
  for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
      for (let c = 0; c < 1000; c++) {
        result = a ** 2 + b ** 2 + c ** 2;
        if (result === 1000 && a < b < c) {
          console.log(a, b, c, result);
          return;
        }
      }
    }
  }
};

pythagorean();

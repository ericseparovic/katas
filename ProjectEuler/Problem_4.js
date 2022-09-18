// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function createNumer() {
    let result = 0;
    var polindromeIs = 0;
    for (let i = 100; i <= 999; i++) {
        for (let j = 100; j <= 999; j++) {
            result = i * j
            let array = String(result).split('')
            let inverted = [...array].reverse()

            let stringArray = array.join('')
            let invertedString = inverted.join('')
            stringArray = Number(stringArray)
            invertedString = Number(invertedString)

            if (stringArray == invertedString && stringArray > polindromeIs) {
                polindromeIs = stringArray
            }


        }
    }
    return console.log(polindromeIs);


}

createNumer()

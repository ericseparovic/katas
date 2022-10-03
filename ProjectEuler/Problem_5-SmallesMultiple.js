// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallest() {
    let i = 1;
    let isSmallest = false;
    let smallNumer;

    do {
        let count = 0;
        for (let j = 1; j <= 20; j++) {
            if (i % j == 0) {
                count++
            }
        }
        if (count == 20) {
            smallNumer = i;
            isSmallest = true;
        }


        i++


    } while (isSmallest == false)

    return smallNumer;
}


console.log(smallest())

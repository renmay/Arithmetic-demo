// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

function findMaxPrimeFactor(n) {
    var m = 1;
    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            n = n/i;
            m = i;
            while (n % i == 0) {
                n = n/i;
                console.log('刚好')
            }
        }
    }
    return m;
}

console.log(findMaxPrimeFactor(20))
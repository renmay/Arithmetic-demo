function findMaxPrimeFactor(n) {
    var m = 1;
    for (var i = 2; n > 1; ++i) {
        if (n % i == 0) {
            n = n/i;
            m = i;
            while (n % i == 0) {
                n = n/i;
            }
        }
    }
    return m;
}

console.log(findMaxPrimeFactor(600851475143))
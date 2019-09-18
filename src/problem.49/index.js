/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 2) {
        return 0;
    }
    var num = [];
    var sum = 0;
    var primes = 2;
    var i, j;
    while (primes < n) {
        sum++;
        for (i = primes; i < n; i += primes) {
            num[i] = false;
        }
        for (j = primes; j <= n; j++) {
            if (typeof num[j] == 'undefined') {
                primes = j;
                break;
            }
        }
    }
    return sum;
};
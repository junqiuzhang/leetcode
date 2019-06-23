/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if ( x >= 0 ) {
        var n = +(x.toString().split('').reverse().join(''));    
    } else {
        var n = -((-x).toString().split('').reverse().join('')); 
    }
    
    if ( n > Math.pow(2,31) - 1 || n < -Math.pow(2,31)) return 0;
    return n;
};
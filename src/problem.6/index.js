/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var len = s.length;
    if (len === 0) {
        return true;
    } else if (len % 2 === 1) {
        return false;
    }
    var Enum = {
        '(': 0,
        '[': 1,
        '{': 2,
        ')': 3,
        ']': 4,
        '}': 5
    }
    var stack = [];
    var i, si, preSi;
    for (i = 0; i < len; i++) {
        si = s[i];
        if (Enum[si] < 3) {
            stack.push(s[i]);
        } else {
            preSi = stack.pop();
            if (Enum[preSi] + 3 !== Enum[si]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    } 
    return true;
};
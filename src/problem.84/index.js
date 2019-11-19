/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) {
        return true;
    }
    var i = 0;
    var j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
            if (i === s.length) {
                return true;
            }
        } else {
            j++;
        }
    }
    return false;
};

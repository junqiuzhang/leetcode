/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s.trim()) {
        return 0;
    }
    var len = 0;
    for (var i = s.length - 1; i >= 0; i-- ) {
        if (s[i] != ' ') {
            len++;
        } else {
            if (len > 0) {
                return len;
            }
        }
    }
    return len;
};
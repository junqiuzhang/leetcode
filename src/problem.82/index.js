/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var temp = {};
    var len = s.length;
    for (var i = 0; i < len; i++) {
        if (typeof temp[s[i]] == 'number') {
            temp[s[i]]++;
        } else {
            temp[s[i]] = 1;
        }
    }
    for (var j = 0; j < len; j++) {
        if (temp[s[j]] === 1) { 
            return j;
        }
    }
    return -1;
};
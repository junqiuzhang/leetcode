/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var temp = {};
    for (var i = 0; i < s.length; i++) {
        if (typeof temp[s[i]] == 'number') {
            temp[s[i]]++;
        } else {
            temp[s[i]] = 1;
        }
    }
    for (var j = 0; j < s.length; j++) {
        if (typeof temp[s[j]] === 'number' && temp[s[j]] === 1) { 
            return j;
        }
    }
    return -1;
};

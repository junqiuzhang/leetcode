/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var temp = [];
    var i = 0;
    for (i = 0; i < t.length; i++) {
        if (typeof temp[t[i].charCodeAt() - 97] == 'number') {
            temp[t[i].charCodeAt() - 97]++;
        } else {
            temp[t[i].charCodeAt() - 97] = 1;
        }
    }
    for (i = 0; i < s.length; i++) {
        if (typeof temp[s[i].charCodeAt() - 97] == 'number') {
            temp[s[i].charCodeAt() - 97]--;
        } else {
            temp[s[i].charCodeAt() - 97] = -1;
        }
    }
    for (i = 0; i < temp.length; i++) {
        if (typeof temp[i] == 'number' && temp[i] === 1) {
          return String.fromCharCode(i + 97)
        }
    }
    return;
};
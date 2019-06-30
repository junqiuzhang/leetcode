/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length < 53 && b.length < 53) {
        return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    }
    var MaxLength = 20;
    var subStrA = '';
    var subStrB = '';
    var concat = '';
    var res = '';
    var add = 0;
    var i = a.length;
    var j = b.length;
    while (i > 0 || j > 0) {
        subStrA = i > 0 ? a.slice(i - MaxLength > 0 ? i - MaxLength : 0, i > 0 ? i : 0) : '0';
        subStrB = j > 0 ? b.slice(j - MaxLength > 0 ? j - MaxLength : 0, j > 0 ? j : 0) : '0';
        concat = (parseInt(subStrA, 2) + parseInt(subStrB, 2) + parseInt(add, 2)).toString(2);
        i -= MaxLength;
        j -= MaxLength;
        add = 0;
        if (concat.length < MaxLength) {
            add = 0;
            concat = (1 << MaxLength - concat.length).toString(2).slice(1).concat(concat);
        } else if (concat.length > MaxLength) {
            add = 1;
            concat = concat.slice(concat.length - MaxLength);
        }
        res = concat + res;
    }
    if (res[0] == '0') {
        res = parseInt(res.slice(0, MaxLength), 2).toString(2) + res.slice(MaxLength);
    }
    if (add == 1) {
        res = 1 + res;
    }
    return res;
};

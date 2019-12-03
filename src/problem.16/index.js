/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 99.85%
// var addBinary = function(a, b) {
//     if (a.length < 53 && b.length < 53) {
//         return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
//     }
//     var MaxLength = 20;
//     var subStrA = '';
//     var subStrB = '';
//     var concat = '';
//     var res = '';
//     var add = 0;
//     var i = a.length;
//     var j = b.length;
//     while (i > 0 || j > 0) {
//         subStrA = i > 0 ? a.slice(i - MaxLength > 0 ? i - MaxLength : 0, i > 0 ? i : 0) : '0';
//         subStrB = j > 0 ? b.slice(j - MaxLength > 0 ? j - MaxLength : 0, j > 0 ? j : 0) : '0';
//         concat = (parseInt(subStrA, 2) + parseInt(subStrB, 2) + parseInt(add, 2)).toString(2);
//         i -= MaxLength;
//         j -= MaxLength;
//         add = 0;
//         if (concat.length < MaxLength) {
//             add = 0;
//             concat = (1 << MaxLength - concat.length).toString(2).slice(1).concat(concat);
//         } else if (concat.length > MaxLength) {
//             add = 1;
//             concat = concat.slice(concat.length - MaxLength);
//         }
//         res = concat + res;
//     }
//     if (res[0] == '0') {
//         res = parseInt(res.slice(0, MaxLength), 2).toString(2) + res.slice(MaxLength);
//     }
//     if (add == 1) {
//         res = 1 + res;
//     }
//     return res;
// };
// 72.95%
var addBinary = function(a, b) {
    if (a.length < 53 && b.length < 53) {
        return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    }
    var res = '';
    var i = a.length - 1;
    var j = b.length - 1;
    var temp = '0';
    var calcNex = {
        '000': '0',
        '100': '0',
        '010': '0',
        '001': '0',
        '011': '1',
        '101': '1',
        '110': '1',
        '111': '1',
        '0undefined0': '0',
        'undefined00': '0',
        '1undefined0': '0',
        'undefined10': '0',
        '0undefined1': '0',
        'undefined01': '0',
        '1undefined1': '1',
        'undefined11': '1',
        'undefinedundefined0': '0',
        'undefinedundefined1': '0',
    }
    var calcCur = {
        '00': '0',
        '01': '1',
        '10': '1',
        '02': '0',
        '20': '0',
        '11': '0',
        '12': '1',
        '21': '1',
        '0undefined': '0',
        'undefined0': '0',
        '1undefined': '1',
        'undefined1': '1',
        '2undefined': '0',
        'undefined2': '0',
    }
    while (i > -1 || j > -1) {
        res = calcCur[a[i] + calcCur[b[j] + temp]] + res;
        temp = calcNex[a[i] + b[j] + temp];
        i--;
        j--;
    }
    if (temp === '1') {
        res = temp + res;
    }
    return res;
};

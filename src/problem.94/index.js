/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var curIndex = 0;
    var preIndex = 0;
    var nextIndex = 0;
    var count = 0;
    var fir = chars[0];
    while (nextIndex <= chars.length) {
        if (chars[nextIndex] === chars[preIndex]) {
            count++;
        } else {
            chars[curIndex] = String(count);
            curIndex++;
            chars[curIndex] = chars[nextIndex];
            curIndex++;
            count = 1;
            preIndex = nextIndex;
        }
        nextIndex++;
    }
    chars.splice(0, 0, fir);
    return curIndex;
};
var a = ["a","b","b","b","b","b","c","c","c","c","c","c"]
console.log(compress(a));
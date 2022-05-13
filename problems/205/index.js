/**
 * 数据结构：哈希表
 * 算法：遍历
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (!s && !t) {
        return true;
    }
    var S2T = {};
    var T2S = {};
    var tempS, tempT;
    for (var i = 0; i < s.length; i++) {
        tempS = s[i];
        tempT = t[i];
        if (!S2T[tempS] && !T2S[tempT]) {
            S2T[tempS] = tempT;
            T2S[tempT] = tempS;
        } else {
            if (S2T[tempS] != tempT || T2S[tempT] != tempS) {
                return false;
            }
        }
    }
    return true;
};
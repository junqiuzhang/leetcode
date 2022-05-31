/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = (secret, guess) => {
    let A = 0;
    let B = 0;
    let map = {};
    for (let i = 0; i < secret.length; i++) {
        if (map[secret[i]]) {
            map[secret[i]]++;
        } else {
            map[secret[i]] = 1;
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] == secret[i]) {
            map[guess[i]]--;
            guess = guess.slice(0, i) + '$' + guess.slice(i + 1);
            A++;
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (map[guess[i]] > 0) {
            map[guess[i]]--;
            B++;
        }
    }
    return A + 'A' + B + 'B';
};
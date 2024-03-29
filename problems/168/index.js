/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = (n) => {
  let ans = '';
  let temp = n;
  let code = 0;
  let Map = [
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
  ];
  while (temp > 0) {
    code = temp % 26;
    ans = Map[code] + ans;
    temp = code === 0 ? Math.floor(temp / 26) - 1 : Math.floor(temp / 26);
  }
  return ans;
};

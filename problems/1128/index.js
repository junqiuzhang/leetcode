import { C } from '../../libs/common/index.js';
const getKey = (domino) => {
  return domino[0] > domino[1]
    ? `${domino[0]},${domino[1]}`
    : `${domino[1]},${domino[0]}`;
};
const getValue = (pairsMap, domino) => {
  const value = pairsMap.get(getKey(domino));
  if (value !== undefined) {
    return value;
  }
  return 0;
};
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = (dominoes) => {
  const pairsMap = new Map();
  for (let i = 0; i < dominoes.length; i++) {
    const domino = dominoes[i];
    pairsMap.set(getKey(domino), getValue(pairsMap, domino) + 1);
  }
  let ans = 0;
  pairsMap.forEach((value, key) => {
    if (value > 1) {
      ans += C(2, value);
    }
  });
  return ans;
};

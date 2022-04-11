import { C } from '../utils/index.js';
function getKey(domino) {
  return domino[0] > domino[1] ? `${domino[0]},${domino[1]}` : `${domino[1]},${domino[0]}`;
}
function getValue(pairsMap, domino) {
  const value = pairsMap.get(getKey(domino));
  if (value !== undefined) {
    return value
  }
  return 0;
}
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const pairsMap = new Map();
  for (let i = 0; i < dominoes.length; i++) {
    const domino = dominoes[i];
    pairsMap.set(getKey(domino), getValue(pairsMap, domino) + 1)
  }
  let res = 0;
  pairsMap.forEach((value, key) => {
    if (value > 1) {
      res += C(2, value);
    }
  })
  return res;
};
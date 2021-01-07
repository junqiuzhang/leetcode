/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  let provinceSetArray = [];
  for (let i = 0; i < isConnected.length; i++) {
    const city = isConnected[i];
    const commonProvinceSet = new Set();
    let provinceSet = new Set();
    for (let j = 0; j < city.length; j++) {
      if (city[j]) {
        provinceSet.add(j);
        for (let k = 0; k < provinceSetArray.length; k++) {
          if (provinceSetArray[k].has(j)) {
            commonProvinceSet.add(k);
          }
        }
      }
    }
    commonProvinceSet.forEach(k => {
      provinceSet = new Set([...provinceSet, ...provinceSetArray[k]]);
      provinceSetArray[k] = undefined;
    })
    provinceSetArray.push(provinceSet);
    provinceSetArray = provinceSetArray.filter(item => item);
  }
  return provinceSetArray.length;
};
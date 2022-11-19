/**
 * @param {number[]} gain
 * @return {number}
 */
export const largestAltitude = (gain) => {
  let curAltitude = 0;
  let maxAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    const diff = gain[i];
    curAltitude += diff;
    if (curAltitude > maxAltitude) {
      maxAltitude = curAltitude;
    }
  }
  return maxAltitude;
};

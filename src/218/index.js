/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
 function getSkyline(buildings) {
  const sortedBuildings = buildings.sort((a, b) => a[2] - b[2])
  const buildingsHeight = [];
  for (let i = 0; i < sortedBuildings.length; i++) {
    const building = sortedBuildings[i];
    for (let j = building[0]; j <= building[1]; j++) {
      buildingsHeight[j] = building[2];
    }
  }
  buildingsHeight[-1] = 0;
  buildingsHeight[buildingsHeight.length] = 0;
  const skyline = [];
  for (let i = -1; i < buildingsHeight.length - 1; i++) {
    const curHeight = buildingsHeight[i] || 0;
    const nextHeight = buildingsHeight[i + 1] || 0;
    if (curHeight !== nextHeight) {
      if (nextHeight > curHeight) {
        skyline.push([i + 1, nextHeight]);
      } else {
        skyline.push([i, nextHeight]);
      }
    }
  }
  return skyline;
};
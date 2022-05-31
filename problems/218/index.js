/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = (buildings) => {
  const getSections = (buildings) => {
    let pointSet = new Set();
    buildings.forEach((building) => {
      pointSet.add(building[0]);
      pointSet.add(building[1]);
    });
    let pointArray = [];
    pointSet.forEach((point) => {
      pointArray.push(point);
    });
    pointArray = pointArray.sort((a, b) => a - b);
    let sections = [];
    for (let i = 0; i < pointArray.length - 1; i++) {
      const section = [pointArray[i], pointArray[i + 1]];
      sections[i] = section;
    }
    return sections;
  };
  const getHeights = (sections) => {
    let newBuildings = [];
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      let height = 0;
      for (let j = 0; j < buildings.length; j++) {
        const building = buildings[j];
        if (building[0] <= section[0] && building[1] >= section[1]) {
          height = Math.max(height, building[2]);
        }
      }
      newBuildings.push([...section, height]);
    }
    return newBuildings;
  };
  const merge = (buildings) => {
    const newBuildings = [buildings[0]];
    for (let i = 1; i < buildings.length; i++) {
      const building1 = newBuildings[newBuildings.length - 1];
      const building2 = buildings[i];
      if (building1[2] === building2[2] && building1[1] === building2[0]) {
        building1[1] = building2[1];
      } else {
        newBuildings.push(building2);
      }
    }
    return newBuildings;
  };
  const sections = getSections(buildings);
  const heightSections = getHeights(sections);
  const mergedSections = merge(heightSections);
  const skyline = [];
  for (let i = 0; i < mergedSections.length; i++) {
    const section = mergedSections[i];
    skyline.push([section[0], section[2]]);
  }
  skyline.push([mergedSections[mergedSections.length - 1][1], 0]);
  return skyline;
};

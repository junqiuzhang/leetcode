/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
export const distanceBetweenBusStops = (distance, start, destination) => {
  let distanceAll = 0;
  let distanceClockwise = 0;
  const max = (destination - start + distance.length) % distance.length;
  for (let i = 0; i < distance.length; i++) {
    const busStop = (start + i) % distance.length;
    distanceAll += distance[busStop];
    if (i < max) {
      distanceClockwise += distance[busStop];
    }
  }
  return Math.min(distanceAll - distanceClockwise, distanceClockwise);
};

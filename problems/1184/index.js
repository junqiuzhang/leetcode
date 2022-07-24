/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
export const distanceBetweenBusStops = (distance, start, destination) => {
  let station1 = start;
  let station2 = start;
  let distance1 = 0;
  let distance2 = 0;
  while (station1 !== destination && station2 !== destination) {
    distance1 += distance[station1];
    station1 = (station1 + 1) % distance.length;
    station2 = (station2 - 1 + distance.length) % distance.length;
    distance2 += distance[station2];
  }
  return station1 === destination ? distance1 : distance2;
};

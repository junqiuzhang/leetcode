import { it, expect } from '../../libs/test/index.js';
import { distanceBetweenBusStops } from '../../problems/1184/index.js';
it('1184', () => {
  expect(distanceBetweenBusStops).call([1, 2, 3, 4], 0, 1).toReturn(1);
  expect(distanceBetweenBusStops).call([1, 2, 3, 4], 0, 2).toReturn(3);
  expect(distanceBetweenBusStops).call([1, 2, 3, 4], 0, 3).toReturn(4);
  expect(distanceBetweenBusStops)
    .call([7, 10, 1, 12, 11, 14, 5, 0], 7, 2)
    .toReturn(17);
});

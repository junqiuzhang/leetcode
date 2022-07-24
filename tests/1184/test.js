import { it, expect } from '../../libs/test/index.js';
import { distanceBetweenBusStops } from '../../problems/1184/index.js';
it('1184', () => {
  expect(distanceBetweenBusStops, [1, 2, 3, 4], 0, 1).toBe(1);
  expect(distanceBetweenBusStops, [1, 2, 3, 4], 0, 2).toBe(3);
  expect(distanceBetweenBusStops, [1, 2, 3, 4], 0, 3).toBe(4);
});

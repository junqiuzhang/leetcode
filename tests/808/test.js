import { it, expect } from '../../libs/test/index.js';
import { soupServings } from '../../problems/808/index.js';
it('808', () => {
  expect(soupServings).call(50).toReturn(0.625);
  expect(soupServings).call(100).toReturn(0.71875);
});

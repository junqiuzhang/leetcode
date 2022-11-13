import { it, expect } from '../../libs/test/index.js';
import { customSortString } from '../../problems/791/index.js';
it('791', () => {
  expect(customSortString).call('cba', 'abcd').toReturn('cbad');
  expect(customSortString).call('cbafg', 'abcd').toReturn('cbad');
});

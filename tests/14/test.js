import { it, expect } from '../../libs/test/index.js';
import { longestCommonPrefix } from '../../problems/14/index.js';
it('14', () => {
  expect(longestCommonPrefix).call(['flower', 'flow', 'flight']).toReturn('fl');
  expect(longestCommonPrefix).call(['dog', 'racecar', 'car']).toReturn('');
});

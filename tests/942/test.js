import { it, expect } from '../../libs/test/index.js';
import { diStringMatch } from '../../problems/942/index.js';
it('942', () => {
  expect(diStringMatch, 'IDID').toBe([0, 4, 1, 3, 2]);
  expect(diStringMatch, 'III').toBe([0, 1, 2, 3]);
  expect(diStringMatch, 'DDI').toBe([3, 2, 0, 1]);
});

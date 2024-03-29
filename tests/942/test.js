import { it, expect } from '../../libs/test/index.js';
import { diStringMatch } from '../../problems/942/index.js';
it('942', () => {
  expect(diStringMatch).call('IDID').toReturn([0, 4, 1, 3, 2]);
  expect(diStringMatch).call('III').toReturn([0, 1, 2, 3]);
  expect(diStringMatch).call('DDI').toReturn([3, 2, 0, 1]);
});

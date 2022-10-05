import { it, expect } from '../../libs/test/index.js';
import { isValidSerialization } from '../../problems/331/index.js';
it('331', () => {
  expect(isValidSerialization).call('9,3,4,#,#,1,#,#,2,#,6,#,#').toReturn(true);
  expect(isValidSerialization).call('1,#').toReturn(false);
  expect(isValidSerialization).call('9,#,#,1').toReturn(false);
});

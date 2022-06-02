import { it, expect } from '../../libs/test/index.js';
import { isValidSerialization } from '../../problems/331/index.js';
it('331', () => {
  expect(isValidSerialization, '9,3,4,#,#,1,#,#,2,#,6,#,#').toBe(true);
  expect(isValidSerialization, '1,#').toBe(false);
  expect(isValidSerialization, '9,#,#,1').toBe(false);
});

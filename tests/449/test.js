import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index.js';
import { serialize, deserialize } from '../../problems/449/index.js';
it('449: serialize', () => {
  expect(serialize).call(array2tree([])).toReturn('[]');
  expect(serialize)
    .call(array2tree([2, 1, 3]))
    .toReturn('[2,1,3]');
  expect(serialize)
    .call(array2tree([2, 1, 3, null, null, 4]))
    .toReturn('[2,1,3,null,null,4]');
  expect(serialize)
    .call(array2tree([1, 2, 3, 4, 5, 6, 7, 8, 9]))
    .toReturn('[1,2,3,4,5,6,7,8,9]');
});
it('449: deserialize', () => {
  expect(deserialize).call('[]').toReturn(array2tree([]));
  expect(deserialize)
    .call('[2,1,3]')
    .toReturn(array2tree([2, 1, 3]));
  expect(deserialize)
    .call('[2,1,3,null,null,4]')
    .toReturn(array2tree([2, 1, 3, null, null, 4]));
  expect(deserialize)
    .call('[1,2,3,4,5,6,7,8,9]')
    .toReturn(array2tree([1, 2, 3, 4, 5, 6, 7, 8, 9]));
});

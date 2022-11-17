import { it, expect } from '../../libs/test/index.js';
import { isMatchSubseq, numMatchingSubseq } from '../../problems/792/index.js';
it('792: isMatchSubseq', () => {
  expect(isMatchSubseq).call('ace', 'abcde').toReturn(true);
  expect(isMatchSubseq).call('aec', 'abcde').toReturn(false);
});
it('792: numMatchingSubseq', () => {
  expect(numMatchingSubseq)
    .call('abcde', ['a', 'bb', 'acd', 'ace'])
    .toReturn(3);
  expect(numMatchingSubseq)
    .call('dsahjpjauf', ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'])
    .toReturn(2);
});

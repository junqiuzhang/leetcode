import { it, expect } from "../../libs/test/index.js";
import { largestPalindrome } from "../../problems/479/index.js";
it("479", () => {
  expect(largestPalindrome, 1).toBe(9);
  expect(largestPalindrome, 2).toBe(987);
  expect(largestPalindrome, 8).toBe(475);
});
import { it, expect } from "../../libs/test/index.js";
import { sortArrayByParity } from "../../src/905/index.js";
it("905", () => {
  expect(sortArrayByParity, [0]).toBe([0]);
  expect(sortArrayByParity, [3, 1, 2, 4]).toBe([2, 4, 3, 1]);
  expect(sortArrayByParity, [2, 4, 6, 8]).toBe([2, 4, 6, 8]);
  expect(sortArrayByParity, [1, 3, 5, 7]).toBe([1, 3, 5, 7]);
});

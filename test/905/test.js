import { it, expect } from "../common/index.js";
import sortArrayByParity from "../../src/905/index.js";
it("905", () => {
  expect(sortArrayByParity, []).toBe([]);
  expect(sortArrayByParity, [3,1,2,4]).toBe([2,4,3,1]);
});

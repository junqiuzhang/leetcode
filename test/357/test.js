import { it, expect } from "../common/index.js";
import { countNumbersWithUniqueDigits } from "../../src/357/index.js";
it("357", () => {
  expect(countNumbersWithUniqueDigits, 0).toBe(1);
  expect(countNumbersWithUniqueDigits, 1).toBe(10);
  expect(countNumbersWithUniqueDigits, 2).toBe(91);
  expect(countNumbersWithUniqueDigits, 8).toBe(2345851);
});

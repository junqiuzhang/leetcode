import { it, expect } from "../../libs/test/index.js";
import {
  HighPriorityOperatorSet as high,
  LowPriorityOperatorSet as low,
  generateTokens,
  calculate,
} from "../../problems/227/index.js";
it("227: generateTokens", () => {
  expect(generateTokens, "3+2*2", high, low).toBe(["3", "+", ["2", "*", "2"]]);
  expect(generateTokens, " 3/2 ", high, low).toBe([["3", "/", "2"]]);
  expect(generateTokens, " 3+5 / 2 ", high, low).toBe([
    "3",
    "+",
    ["5", "/", "2"],
  ]);
  expect(generateTokens, "14/3*2", high, low).toBe([
    ["14", "/", "3", "*", "2"],
  ]);
  expect(generateTokens, "1*2-3/4+5*6-7*8+9/10", high, low).toBe([
    ["1", "*", "2"],
    "-",
    ["3", "/", "4"],
    "+",
    ["5", "*", "6"],
    "-",
    ["7", "*", "8"],
    "+",
    ["9", "/", "10"],
  ]);
});
it("227: calculate", () => {
  expect(calculate, "3+2*2").toBe(7);
  expect(calculate, " 3/2 ").toBe(1);
  expect(calculate, " 3+5 / 2 ").toBe(5);
  expect(calculate, "14/3*2").toBe(8);
  expect(calculate, "1*2-3/4+5*6-7*8+9/10").toBe(-24);
});

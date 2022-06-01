import { it, expect } from "../../libs/test/index.js";
import { array2tree } from "../../libs/common/index.js";
import { sumRootToLeaf } from "../../problems/1022/index.js";
it("1022", () => {
  expect(sumRootToLeaf, array2tree([1, 0, 1, 0, 1, 0, 1])).toBe(22);
  expect(sumRootToLeaf, array2tree([0])).toBe(0);
});

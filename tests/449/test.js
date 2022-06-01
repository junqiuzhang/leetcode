import { it, expect } from "../../libs/test/index.js";
import { array2tree } from "../../libs/common/index.js";
import { serialize, deserialize } from "../../problems/449/index.js";
it("449: serialize", () => {
  expect(serialize, array2tree([])).toBe("[]");
  expect(serialize, array2tree([2, 1, 3])).toBe("[2,1,3]");
  expect(serialize, array2tree([2, 1, 3, null, null, 4])).toBe(
    "[2,1,3,null,null,4]"
  );
  expect(serialize, array2tree([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(
    "[1,2,3,4,5,6,7,8,9]"
  );
});
it("449: deserialize", () => {
  expect(deserialize, "[]").toBe(array2tree([]));
  expect(deserialize, "[2,1,3]").toBe(array2tree([2, 1, 3]));
  expect(deserialize, "[2,1,3,null,null,4]").toBe(
    array2tree([2, 1, 3, null, null, 4])
  );
  expect(deserialize, "[1,2,3,4,5,6,7,8,9]").toBe(
    array2tree([1, 2, 3, 4, 5, 6, 7, 8, 9])
  );
});

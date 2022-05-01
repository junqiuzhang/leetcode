import { it, expect } from "../common/index.js";
import { array2tree } from "../../src/common/index.js";
import getAllElements, {
  binarySearchTree2sortArray,
} from "../../src/1305/index.js";
it("1305: binarySearchTree2array", () => {
  expect(binarySearchTree2sortArray, array2tree([2, 1, 4])).toBe([1, 2, 4]);
  expect(binarySearchTree2sortArray, array2tree([1, 0, 3])).toBe([0, 1, 3]);
  expect(binarySearchTree2sortArray, array2tree([1, null, 8])).toBe([1, 8]);
  expect(binarySearchTree2sortArray, array2tree([8, 1])).toBe([1, 8]);
});
it("1305: ", () => {
  expect(getAllElements, array2tree([2, 1, 4]), array2tree([1, 0, 3])).toBe([
    0, 1, 1, 2, 3, 4,
  ]);
  expect(getAllElements, array2tree([1, null, 8]), array2tree([8, 1])).toBe([
    1, 1, 8, 8,
  ]);
});

import { it, expect } from "../common/index.js";
import { add, multi, multiply } from "../../src/my-coding-interviews-8/index.js";
it("my-coding-interviews-8: add", () => {
  expect(add, "0", "0").toBe("0");
  expect(add, "1", "1").toBe("2");
  expect(add, "99", "9").toBe("108");
  expect(add, "9", "99").toBe("108");
  expect(add, "-1", "-1").toErr("Error: -1 is not a number");
});
it("my-coding-interviews-8: multi", () => {
  expect(multi, "0", "0").toBe("0");
  expect(multi, "1", "1").toBe("1");
  expect(multi, "99", "9").toBe("891");
  expect(multi, "9", "99").toBe("81");
  expect(multi, "-1", "-1").toErr("Error: -1 is not a number");
});
it("my-coding-interviews-8: multiply", () => {
  expect(multiply, "0", "0").toBe("0");
  expect(multiply, "1", "1").toBe("1");
  expect(multiply, "99", "9").toBe("891");
  expect(multiply, "9", "99").toBe("891");
  expect(multiply, "-1", "-1").toErr("Error: -1 is not a number");
});

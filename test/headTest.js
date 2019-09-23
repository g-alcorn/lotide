const head = require('../head');
const assert = require('chai').assert;

//testing
describe("testing head of array", () => {
  it("should return 5 when given [5, 6, 7]", () => {
    assert.isTrue(head([5, 6, 7]) === 5);
  });

  it("should return 'hello' when given ['hello', 'lighthouse', 'labs']", () => {
    assert.isTrue(head(["hello", "lighthouse", "labs"]) === "hello");
  });

  it("should return 'h' when given 'hello'", () => {
    assert.isTrue(head("hello") === "h");
  });
});
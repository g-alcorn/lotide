const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("testing asserting arrays equal", () => {
  it("should return true when passed [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("should return false when passed [1, 2, 3] and [1, 3, 2]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [1, 3, 2]));
  });
});
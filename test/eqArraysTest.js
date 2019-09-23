const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

//testing
describe("testing if arrays are equal", () => {
  it("should return true when comparing [1, 2, 3] to [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should return false when comparing [1, 2, 3] to [1, 4, 3]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 4, 3]));
  });

  it("should return false when comparing ['1', '2'] to ['1', 2]", () => {
    assert.isFalse(eqArrays(['1', '2'], ['1', 2]));
  });

  it("should return true when comparing ['1', '2'] to ['1', '2']", () => {
    assert.isTrue(eqArrays(['1', '2'], ['1', '2']));
  });
});
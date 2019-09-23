const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;

describe("testing middle of arrays", () => {
  it("should return [2, 3] from [1, 2, 3, 4]", () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
  });

  it("should return [2] from [1, 2, 3]", () => {
    assert.isTrue(eqArrays(middle([1, 2, 3]), [2]));
  });

  it("should return [] from [1]", () => {
    assert.isTrue(eqArrays(middle([1]), []));
  });

  it("should return [] from [1, 2]", () => {
    assert.isTrue(eqArrays(middle([1, 2]), []));
  });
});
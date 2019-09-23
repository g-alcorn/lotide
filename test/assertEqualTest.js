const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//testing
describe("testing assertEqual", () => {
  it("should return false when comparing Lighthouse to Labs", () => {
    assert.isFalse(assertEqual("Lighthouse","Labs"));
  });

  it("should return true when comparing 1 to 1", () => {
    assert.isTrue(assertEqual(1,1));
  });

  it("should return false when comparing 2 to 1", () => {
    assert.isFalse(assertEqual(2,1));
  });

  it("should return true when comparing Griffin to Griffin", () => {
    assert.isTrue(assertEqual("Griffin","Griffin"));
  });
})
const eqArrays = require('../eqArrays');
const tail = require('../tail');
const assert = require('chai').assert;

//testing
const testInput = ["Hello","Lighthouse","Labs"];
const test1 = tail(testInput);

describe("testing tail", () => {
  it("should return ['Lighthouse', 'Labs'] when given ['Hello', 'Lighthouse', 'Labs'", () => {
    assert.isTrue(eqArrays(["Lighthouse", "Labs"], test1));
  });

  it("should return array with length one less than input", () => {
    assert.isTrue(test1.length === testInput.length - 1);
  });
});
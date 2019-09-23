//function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

module.exports = assertEqual;
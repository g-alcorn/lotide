const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}
let test = map(words, word => word[0]);

////testing////
const assertArraysEqual = function(array1, array2) {
  var result = false;
  if (array1.length !== array2.length)
    result = false;

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i])
      result = true;
    else {
      result = false;
      break;
    }
  }
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

console.log(assertEqual(assertArraysEqual(test, [ 'g', 'c', 't', 'm', 't' ]), true));


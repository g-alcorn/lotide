const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) 
    return false;

  for (var arrayCheck in keys1) {
    if (Array.isArray(object1[arrayCheck]) || Array.isArray(object2[arrayCheck])) {
      return false
    } else if (Array.isArray(object1[arrayCheck]) && Array.isArray(object2[arrayCheck])) {
      eqArrays(object1[arrayCheck], object2[arrayCheck]);
    } else {
      for (var i = 0; i < keys1.length; i++) {
        console.log(object1[keys1[i]]);
        if (object1[keys1[i]] !== object2[keys2[i]]) {
          return false;
        }
      }
    }

    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected))
    console.log(`😍Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);

  else
    console.log(`🤬Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);

};

assertObjectsEqual({ a: 1, b: 2 },{ a: 1, b: 2});
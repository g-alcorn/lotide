const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("😍The arrays are equal.");
    return true;
  } else {
    console.log("🤬The arrays are not equal.");
    return false;
  }
};

module.exports = assertArraysEqual;
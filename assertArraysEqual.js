const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)
    console.log("😍The arrays are equal.");
  else
    console.log("🤬The arrays are not equal.");
};

module.exports = assertArraysEqual;
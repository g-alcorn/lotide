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
  if (result === true)
    console.log("The arrays are equal.");
  else
    console.log("The arrays are not equal.");
};

const eqArrays = function(array1, array2) {
  var result;
  if (array1.length !== array2.length)
    return false;

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i])
      result = true;
    else result = false;
  }
  return result;
};

const flatten = function(input) {
  var response = [];
  for (var i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      for (var j = 0; j < input[i].length; j++) {
        response.push(input[i][j]);
      }
    } else
      response.push(input[i]);
  }

  return response;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

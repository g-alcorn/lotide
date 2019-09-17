const assertArraysEqual = function(array1, array2) {
  var result = false;
  if (array1.length !== array2.length)
    result = false;
  else if (array1.length <= 2)
    result = true;

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

const middle = function(input) {
  var length = input.length, midIndex = 0, midIndex1 = 0, midIndex2 = 0;
  var response = [];
  
  if (length <= 2) {
    console.log(response);
    return response;
  } else if (length % 2 === 0) {
    midIndex1 = (length / 2) - 1;
    midIndex2 = (length / 2);
    response.push(input[midIndex1]);
    response.push(input[midIndex2]);
    console.log(response);
    return response;

  } else if (length % 2 !== 0) {
    midIndex = Math.ceil(length / 2) - 1;
    response.push(input[midIndex]);
    console.log(response);
    return response;
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

const assertArraysEqual = function(array1, array2) {
  var result = false;
  if (array1.length !== array2.length)
    result =false;

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

assertArraysEqual([1, 2, 3], [1, 2, 3]); //test arrays are equal
assertArraysEqual([1, 2, 3], [1, 3, 3]); //test arrays are unequal
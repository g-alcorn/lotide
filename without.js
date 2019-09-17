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

const without = function(words, remove) {
  var response = [];
  if (remove.length === 0)
    return words;

  for (var i = 0; i < words.length; i++) {
    var isPresent = false;
    for (var j = 0; j < remove.length; j++) {
     if(words[i] === remove[j]){
        isPresent = true;
        break;
      }
    }
    console.log(words[i] + " " + isPresent);
    if(isPresent === false)
      response.push(words[i]);
  }

  return response;
};
const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["world"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

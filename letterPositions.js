const letterPositions = function(sentence) {
  const results = {};
  let i = 0;

  // logic to update results here
  for (let char of sentence){
    if(!results[char] && char !== " ") {
      results[char] = [i];
    } else if(results[char] && char !== " ")
      results[char].push(i);

    i++;
  }
  return results;
};

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
  var result = false;
  if (array1.length !== array2.length)
    return false;

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i])
      result = true;
    else result = false;
  }
  return result;
};


//testing
assertArraysEqual(letterPositions("hellllo").l, [2, 3, 4, 5]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

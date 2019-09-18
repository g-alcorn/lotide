const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

const findKeyByValue = function(input, test) {
  var response = undefined;
  for (let char in input) {
    if(input[char] === test){
      response = input[char];
      return response;
    }
  }
  return response;
}
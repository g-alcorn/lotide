const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

const tail = function(input) {
  const response = [];
  if (input.length <= 1)
    return "error";

  for (var i = 1; i < input.length; i++) {
    response.push(input[i]);
  }
  return response;
};

//testing
const testInput = ["Hello","Lighthouse","Labs"];
const test1 = tail(testInput);
assertEqual(test1.length, 2);
assertEqual(test1[0], "Lighthouse");
assertEqual(testInput.length,3);
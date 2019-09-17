//function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

//testing
assertEqual("Lighthouse","Labs");
assertEqual(1,1);
assertEqual(2,1);
assertEqual("Griffin","Griffin"); 
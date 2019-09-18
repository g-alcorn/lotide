const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length === keys2.length){
    let condition = false;
    for (var i = 0; i < keys1.length; i++){
      if (keys1[i] === keys2[i]) {
        condition = true;
      } else
        return condition;
    }

    if (condition)
      return condition;
  } else
  return false;
};

const test1 = { aaa: 3, bbb: 5, ccc: 7};
const test2 = { ccc: 8, aaa: 5, bbb: 3};
const test3 = { ddd: 10, ccc: 8, aaa: 5, bbb: 3};


console.log(eqObjects(test1, test2));
console.log(eqObjects(test1, test3));
console.log(eqObjects(test3, test3));
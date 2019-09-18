const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) 
    return false;

  for (var arrayCheck in keys1) {
    //console.log(object1[keys1[arrayCheck]]);

    if (Array.isArray(object1[arrayCheck]) || Array.isArray(object2[arrayCheck])) {
      return false
    } else if (Array.isArray(object1[arrayCheck]) && Array.isArray(object2[arrayCheck])) {
      eqArrays(object1[arrayCheck], object2[arrayCheck]);
    } else {
      for (var i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i]) {
          return false;
        }
      }
    }

    return true;
  }
};

// const test1 = { aaa: 3, bbb: 5, ccc: 7};
// const test2 = { ccc: 8, aaa: 5, bbb: 3};
// const test3 = { ddd: 10, ccc: 8, aaa: 5, bbb: 3};

// console.log(eqObjects(test1, test2));
// console.log(eqObjects(test1, test3));
// console.log(eqObjects(test3, test3));

const dc = { d: ["2", 3], c: "1" };

const cd1 = { c: ["1", "2"], d: ["2", 3] };
const cd2 = { c: ["1", "2"], d: ["2", 3] };
const cd3 = { c: ["1", "2"], d: ["2", "3"] };
assertEqual(eqObjects(cd1, cd2), true); // => true
assertEqual(eqObjects({a: "asdf", b: "asdf"}, cd1), false); // => false
assertEqual(eqObjects(dc, cd2), false); // => false
assertEqual(eqObjects(cd1, cd3), true); // => false
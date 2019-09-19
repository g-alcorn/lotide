const takeUntil = function(array, callback) {
  // ...
  let results = [];
  for (let item of array){
    if(callback(item))
      break;
    else
      results.push(item);
  }
  return results;
}
////testing////
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
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const trueResults1 = [ 1, 2, 5, 7, 2 ];
console.log(results1);
assertEqual(assertArraysEqual(results1, trueResults1), true);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const trueResults2 = ["I've", "been", "to", "Hollywood"];
console.log(results2);
assertEqual(assertArraysEqual(results2, trueResults2), true);
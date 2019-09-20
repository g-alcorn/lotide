const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

const findKey = function(object, callback) {
  let keys = Object.keys(object), innerKeys = [], stars = [];
  let response = undefined;

  for (var i = 0; i < keys.length; i++) {
    innerKeys.push(Object.keys(object[keys[i]]));
  }

  for (var i = 0; i < innerKeys.length; i ++) {
    for (var j = 0; j < innerKeys[i].length; j++) {
      stars.push(object[keys[i]][innerKeys[0][0]]);
    }
  }

 
  for (var i = 0; i < stars.length; i++) {
    if (callback(stars[i])) {
      response = stars[i]; 
      console.log(keys[i] + " has the correct number of stars!");
      return response;
    }
  }

  console.log("No truthy value found");
  return response;
};


let input = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
assertEqual(findKey(input , x => x === 2), 2); // => "noma"
assertEqual(findKey(input , x => x === 3), 3); // => "Akaleri"
assertEqual(findKey(input , x => x === 5), 5); // => "undefined"
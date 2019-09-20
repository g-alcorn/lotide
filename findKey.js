const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

const findKey = function(object, callback) {
  let keys = Object.keys(object), innerKeys = [], stars = [];
  let response = undefined;
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    innerKeys.push(Object.keys(object[keys[i]]));
  }

  console.log(innerKeys);
  // for (var i = 0; i < innerKeys.length;)

  for (var i = 0; i < innerKeys.length; i ++) {
    for (var j = 0; j < innerKeys[i].length; j++) {
      stars.push(object[keys[i][innerKeys[j]]]);
    }
  }

  console.log(stars);
  for (var i = 0; i < stars.length; i++) {
    console.log(stars[i]);
    if (callback(stars[i])) {
      response = object[keys[i][innerKeys[i][deepKeys[i]]]]; 
      return response;
    }
  }

  return response;
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x === 2) // => "noma"

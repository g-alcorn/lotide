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
  let keys = Object.keys(object);
  let response = undefined;

  for (let items in object) {
    console.log(items + " " + object[keys]);
    if (callback(object[keys][items])) {
      response = items[keys]; 
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
}, x => x.stars === 2) // => "noma"

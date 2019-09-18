const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰Assertion passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🤬Assertion failed: ${actual} !== ${expected}`);
    return;
  }
};

const countOnly = function(text) {
  const response = {};
  for(let char of text) {
    if(response[char]){
      response[char] += 1;
    } else
    response[char] = 0;

    // if(text[char]){
    //   if(response[char]){
    //     response[char] += 1;
    //   } else
    //   response[char] = 0;
    // } 
  }
  return response;
};



var testing = "bbbcccddd";
console.log(countOnly(testing));

assertEqual(countOnly(testing),{b: 3, c: 3, d: 3});
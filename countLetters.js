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
  let newText = text.replace(" ", "");
  for(let char of newText) {

    if(!response[char]){
      response[char] = 1;
    } else
    response[char] += 1;

    // if(text[char]){
    //   if(response[char]){
    //     response[char] += 1;
    //   } else
    //   response[char] = 0;
    // } 
  }
  return response;
};



var testing = "bbbccc ddd";
console.log(countOnly(testing));
const eqArrays = function(array1, array2) {
  if (array1.length === 0 && array2.length === 0)
    return true;  
  
  if (array1.length !== array2.length)
    return false;

  let result = false;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]){
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

module.exports = eqArrays;
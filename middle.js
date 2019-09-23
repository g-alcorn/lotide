const middle = function(input) {
  var length = input.length, midIndex = 0, midIndex1 = 0, midIndex2 = 0;
  var response = [];
  
  if (length <= 2) {
    // console.log(response);
    return response;
  } else if (length % 2 === 0) {
    midIndex1 = (length / 2) - 1;
    midIndex2 = (length / 2);
    response.push(input[midIndex1]);
    response.push(input[midIndex2]);
    // console.log(response);
    return response;

  } else if (length % 2 !== 0) {
    midIndex = Math.ceil(length / 2) - 1;
    response.push(input[midIndex]);
    // console.log(response);
    return response;
  }
};

module.exports = middle;
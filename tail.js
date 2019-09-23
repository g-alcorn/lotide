const tail = function(input) {
  const response = [];
  if (input.length <= 1)
    return "error";

  for (var i = 1; i < input.length; i++) {
    response.push(input[i]);
  }
  return response;
};

module.exports = tail;
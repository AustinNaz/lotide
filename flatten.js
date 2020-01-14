const flatten = function(data) {
  let extraArrays = [];
  let test = [];

  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i]) === true) {
      extraArrays = data[i];
      for (let x = 0; x < extraArrays.length; x++) {
        test.push(extraArrays[x]);
      }
    } else {
      test.push(data[i]);
    }
  }
  return test;
};


module.exports = flatten;
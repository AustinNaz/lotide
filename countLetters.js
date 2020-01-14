const countLetters = function(string) {
  const results = {}
  for (letters of string) {
    // console.log(letters);
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
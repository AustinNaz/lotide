const map = function(array, callback) {
  const results = [];
  array.forEach(function(value) {
    if (callback(value)) {
      results.push(callback(value))
    }
  });
  return results;
}

module.exports = map;
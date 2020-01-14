const findKey = function(object, callback) {
  let result = '';

  for (key in object) {
      if (callback(object[key])) {
        result = key;
        return result;
    }
  }
};

module.exports = findKey;
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require('./eqArrays');

function eqObjects(obj1, obj2) {
  let isEqual = false;
  for (objects of Object.keys(obj1)) {
    // console.log(objects);
    if (typeof obj1[objects] === 'object' && typeof obj2[objects] === 'object' &&  !Array.isArray(obj1[objects]) && !Array.isArray(obj2[objects])) {
      // console.log('is Object');
      return eqObjects(obj1[objects], obj2[objects]);
    } else if (Array.isArray(obj1[objects]) && Array.isArray(obj2[objects])) {
      // console.log('is Array');
      return isEqual = eqArrays(obj1[objects].sort(), obj2[objects].sort())
      // return isEqual = eqArrays(Object.keys(obj1[objects]).sort(), Object.keys(obj2[objects]).sort());
    }

    if (obj1[objects] === obj2[objects]) {
      isEqual = true;
    } else {
      isEqual = false;
      return isEqual;
    }
  }
  return isEqual;
};

module.exports = eqObjects;
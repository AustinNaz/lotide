const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {    // Test if the inputs are equal in type and data
    console.log(`✔️✔️✔️: ${inspect(actual)} === ${inspect(expected)}`);
  } else {    // Else return failed
    console.log(`🔴️🔴️🔴️: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let isEqual = false;
  if (arr1.length !== arr2.length) return false;    // If array lengths arent equal automatically make false

  for (let x = 0; x < arr1.length; x++) {   // Iterate over one of the array lengths
    if (arr1[x] !== arr2[x]) {    // If one of the objects dont equal the other arrays automatically set isEqual to false and exit
      return isEqual = false;
      // return false;
    } else {
      isEqual = true;
    }
  }
  return isEqual;
};

const eqObjects = function(object1, object2) {
  let test = false;
  if (eqArrays(Object.keys(object1).sort(), Object.keys(object2).sort())) {   // Check if the keys are the same in both
    for (objects in object1) {
      if (object1[objects] === object2[objects]) {    // If the values and data types of the objects are the same in both set true and try next
        test = true;
      } else if (eqArrays(object1[objects], object2[objects])) {    // If the data types are different but the values are the same contine
          test = true;
        } else {
        test = false;
          break;
        }
      }
    }
  return test;
};

assertObjectEqual({c: '4', d: ['2', 3, 4]}, {c: '4', d: ['2', 3, 4]})

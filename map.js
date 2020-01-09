const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {    // Test if the inputs are equal in type and data
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {    // Else return failed
    console.log(`🔴️🔴️🔴️: ${actual} !== ${expected}`);
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  array.forEach(function(value) {
    if (callback(value)) {
      results.push(callback(value))
    }
  });
  return results;
}
// 
const results1 = map(words, word => word.length);
const results2 = map(words, (function (word) { return word.length >= 5 ? word.length : null}));    // When using a expression that equals true or false, the map function pushes the true or false instead of the value unless using a ternary
const results3 = map(words, word => word.includes('r') ? word : null)   // Want to try and check if letter is in word, has to use ternary again
// put the more specific condition in the callback function
// while the higher order function is more generic

// console.log(results1);

// console.log(map(words, word => word));
assertArraysEqual(results1, [6, 7, 2, 5, 3]);
assertArraysEqual(results2, [6, 7, 5]);
assertArraysEqual(results3, ['ground', 'control', 'major']);
const assertEqual = function(actual, expected) {
  if (actual === expected) {    // Test if the inputs are equal in type and data
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false,
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
// const assertArraysEqual = function(actual, expected) {
//   const passedStr = `✔️✔️✔️: ${actual} === ${expected}`;
//   const failedStr = `🔴️🔴️🔴️: ${actual} !== ${expected}`;
//   let isEqual = false;

//   if (actual.length === expected.length) {    // First check lengths are equal
//     for (let x = 0; x < actual.length; x++) {
//       if (actual[x] === expected[x]) {    // Check that the values are equal
//         isEqual = true;
//       } else {
//         isEqual = false;    // If it hits one false it breaks out of the loop
//         break;
//       }
//     }
//   } else {
//     isEqual = false;
//   }
//   if (!isEqual) {   // Log the strings
//     console.log(failedStr);
//   } else {
//     console.log(passedStr);
//   }
// };

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

assertArraysEqual('test', 'test');
assertArraysEqual([1, 2, 3], [1, 2, 3]);
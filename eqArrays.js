const assertEqual = function(actual, expected) {
  if (actual === expected) {    // Test if the inputs are equal in type and data
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {    // Else return failed
    console.log(`🔴️🔴️🔴️: ${actual} !== ${expected}`);
  }
};

// const eqArrays = function(arr1, arr2) {
//   let isEqual = false;
//   if (arr1.length !== arr2.length) return false;    // If array lengths arent equal automatically make false

//   for (let x = 0; x < arr1.length; x++) {   // Iterate over one of the array lengths
//     if (arr1[x] !== arr2[x]) {    // If one of the objects dont equal the other arrays automatically set isEqual to false and exit
//       return isEqual = false;
//       // return false;
//     } else {
//       isEqual = true;
//     }
//   }
//   return isEqual;
// };

// const eqArrays = function(arr1, arr2) {
//   let isEqual = true;
//   console.log(arr1.length, arr2.length, '-');
//   return arr1.forEach ((test,value) => {
//     // for (let value = 0; value < arr1.length; value++) {
//     console.log('value', value);
//     console.log('value', typeof value);
//     if (Array.isArray(arr1[value]) && Array.isArray(arr2[value])) {
//       console.log('arr1', arr1[value]),
//       console.log('is array');
//       // if (!eqArrays(arr1[value], arr2[value])) {
//       //   return isEqual = false;
//       // }
//       return eqArrays(arr1[value], arr2[value])
//     } else if (arr1[value] === arr2[value]) {
//       console.log('arr2', arr2, 'value', value, 'arr2Value', arr2[value])
//       console.log('arr1', arr1, 'value', value, 'arr1Value', arr1[value]);
//       return isEqual = true;
//     } 
//     else {
//       // return isEqual = false;
//       // return console.log(isEqual = false);
//     }
//   // }
//   })
//   // console.log(isEqual, arr1, arr2);
//   if (isEqual === false) {
//     return isEqual;
//   }
// }

const eqArrays = function(arr1, arr2) {
  let isEqual;
  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) return isEqual = false;    // check if the level of arrays you are at in the stack have the same length

  arr1.forEach((value, index) => {
    if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {   // Check if the level of arrays in the stack is has an another array nested in it
       if (!eqArrays(arr1[index], arr2[index])) {   // Do a recursion if it is an array of arrays, and return false up the stack if theres a false call
        return this.isEqual = false;
      }
    } else if (arr1[index] !== arr2[index]) {   // if its not an array then check if its false, if it is change the variable to false but with this. so it refers to the function version of this? on the higher stack?
      return this.isEqual = false;
    }
    return this.isEqual = true;
  });
  return this.isEqual;
}

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false,
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

console.log(eqArrays([[2, 3], [4], [5]], [[2, 3], [4], [5]])) // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
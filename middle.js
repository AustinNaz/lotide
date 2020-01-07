const assertArraysEqual = function(actual, expected) {
  const passedStr = `✔️✔️✔️: ${actual} === ${expected}`;
  const failedStr = `🔴️🔴️🔴️: ${actual} !== ${expected}`;
  let isEqual = false;

  if (actual.length === expected.length) {    // First check lengths are equal
    for (let x = 0; x < actual.length; x++) {
      if (actual[x] === expected[x]) {    // Check that the values are equal
        isEqual = true;
      } else {
        isEqual = false;    // If it hits one false it breaks out of the loop
        break;
      }
    }
  } else {
    isEqual = false;
  }
  if (!isEqual) {   // Log the strings
    console.log(failedStr);
  } else {
    console.log(passedStr);
  }
};

const middle = function(arr) {
  let rtnArr = [];
  if (arr.length <= 2) {    // Keep the array empty if 2 or less objects
    rtnArr = [];
  } else if (!(arr.length % 2)) {   // If the array has an even number of objects, add both the middle numbers
    rtnArr.push(arr[(arr.length / 2) - 1], arr[(arr.length / 2)]);
  } else {
    rtnArr.push(arr[Math.ceil((arr.length / 2) - 1)]);    // If its an odd number of objects, add the middle object
  }
  return rtnArr;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
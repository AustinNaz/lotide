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

const flatten = function(arr) {
  let flatArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {    // Check if the object is an array
      for (let y = 0; y < arr[x].length; y++) {   // If it is, iterate and push to the new array
        flatArr.push(arr[x][y]);
      }
    } else {
      flatArr.push(arr[x]);   // Otherwise just push to the new array
    }
  }
  return flatArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, 2, [3, [4, 5]], 7, [7]]), [1, 2, 3, 4, 5, 7, 7]);
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

const without = function(arr, remove) {
  let withoutArr = [];
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < remove.length; y++) {   // Iterate through the length of the array, and the length of the removed array inside that one.
      if (arr[x] === remove[y]) {   // Dont add to the new array if one of the remove objects match the original array
      } else {
        if (y === remove.length - 1) {    // push to the new array if theres no matches
          withoutArr.push(arr[x]);
        }
      }
    }
  }
  return withoutArr;
};

assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, '2', 3], [2]), [1, '2', 3]);
assertArraysEqual(without(['test', 'othertest', 'newtest'], ['othertest']), ['test', 'newtest']);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
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

assertArraysEqual('test', 'test');
assertArraysEqual([1, 2, 3], [1, 2, 3]);
const assertEqual = function(actual, expected) {
  // let actualString = String(actual);    // change any values that come in to strings so they can be compared
  // let expectedString = String(expected);

  if (actual === expected) {    // Test if the inputs are equal in type and data
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {    // Else return failed
    console.log(`🔴️🔴️🔴️: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let narr = arr.slice(1);    // Slice the array after the first variable
  return narr;
};


tail(['test', 'next test', 'nextnexttest']);
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words[0], 'Lighthouse'); // original array should still have 3 elements!
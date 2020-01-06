const assertEqual = function(actual, expected) {
  if (actual === expected) {    // Test if the inputs are equal in type and data
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {    // Else return failed
    console.log(`🔴️🔴️🔴️: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  let headVar = '';   // Create the final variable
  if (!arr) {   // If there is no array return undefined
    return undefined;
  } else {    // Set the first variable of the array to the final variable and return it
    headVar = arr[0];
    return headVar;
  }
};

assertEqual(head([]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 8);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
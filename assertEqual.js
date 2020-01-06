// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {    // Test if the inputs are equal in type and data
    console.log('✔️✔️✔️: ' + actual + ' === ' + expected);
  } else {    // Else return failed
    console.log('🔴️🔴️🔴️: ' + actual + ' !== ' + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Test String", "test String");
assertEqual(2, 3);
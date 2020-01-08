const assertEqual = function(actual, expected) {
  if (actual === expected) {    // Test if the inputs are equal in type and data
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {    // Else return failed
    console.log(`🔴️🔴️🔴️: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {}
  for (letters of string) {
    // console.log(letters);
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return console.log(results);
};

countLetters('LHL');
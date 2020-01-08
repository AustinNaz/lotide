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

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {    // Test if the inputs are equal in type and data
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {    // Else return failed
    console.log(`🔴️🔴️🔴️: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let count = 0;
  const results = {};
  for (item of allItems) {
    // count += 1;
    if (itemsToCount[item]){
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    // console.log(items);
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
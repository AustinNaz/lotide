const eqObjects = require('./index').eqObjects;

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected), '-')
  if (eqObjects(actual, expected)) {    // Test if the inputs are equal in type and data
    console.log(`✔️✔️✔️: ${inspect(actual)} === ${inspect(expected)}`);
  } else {    // Else return failed
    console.log(`🔴️🔴️🔴️: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectEqual;
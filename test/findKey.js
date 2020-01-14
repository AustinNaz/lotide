const assert = require('chai').assert;
const findKey = require('../index').findKey;

describe('#findKey', () => {
  it('Finds the first key based on the value to the stars key value', () => {
    obj1 = {
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      };
      assert.strictEqual(findKey(obj1, x => x.stars === 2), 'noma')
  });
});
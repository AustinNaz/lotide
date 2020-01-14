const assert = require('chai').assert;
const map = require('../index').map;

describe('#map', () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it('Get the length for each word in the array', () => {
    const results1 = map(words, word => word.length);
    assert.deepEqual(results1, [6, 7, 2, 5, 3]);
  });

  it('Gets words that are greater than or equal to 5 letters long', () => {
    const results2 = map(words, word => word.length >= 5 ? word : null);
    assert.deepEqual(results2, ['ground', 'control', 'major']);
  });

  it('Gets words that only include the lettter n', () => {
    const results3 = map(words, word => word.includes('n') ? word : null);
    assert.deepEqual(results3, ['ground', 'control']);
  });
});
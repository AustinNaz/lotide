const assert = require('chai').assert;
const without = require('../index').without;

describe('#without', () => {
  it('Removes a number from an array', () => {
    assert.deepEqual(without([1, 2, 3], [2]), [1, 3]);
  });

  it('Removes a string from an array', () => {
    const words = ['hello', 'lighthouse', 'labs'];
    assert.deepEqual(without(words, ['hello']), ['lighthouse', 'labs'])
  });

  it('Works even if a single input isnt an array', () => {
    const words = ['hello', 'lighthouse', 'labs'];
    assert.deepEqual(without(words, 'hello'), ['lighthouse', 'labs'])
  });
});
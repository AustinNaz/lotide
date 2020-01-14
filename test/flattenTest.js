const assert = require('chai').assert;
const flatten = require('../index').flatten;

describe('#flatten', () => {
  it('flatten an array that has another inside of it', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
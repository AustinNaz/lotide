const assert = require('chai').assert;
const letterPosition = require('../index').letterPosition;

describe('#letterPosition', () => {
  it('Finds the index of the letters in a string', () => {
    assert.deepEqual(letterPosition('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
});

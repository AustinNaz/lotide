const assert = require('chai').assert;
const countLetters = require('../index').countLetters;

describe('#countLetters', () => {
  it('should equal the amount of letters in the string', () => {
    assert.deepEqual(countLetters('lhl'), {l: 2, h: 1})
  })
})
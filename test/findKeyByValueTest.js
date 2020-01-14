const assert = require('chai').assert;
const findKeyByValue = require('../index').findKeyByValue;

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

  it('Finds drama genre if you input the wire', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it('Gives undefined if you search for a show not specified', () => {
    assert.notExists(findKeyByValue(bestTVShowsByGenre, 'That 70s Show'));
  });
});
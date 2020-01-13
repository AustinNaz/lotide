const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('return undefined when empty array is added', () => {
    assert.notExists(middle([]));
  })

  it("returns 3 for the middle of  [1, 2, 3, 4 ,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns '6' for middle of an odd array where 6 is middle", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]); 
  });
});
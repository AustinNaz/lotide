const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('return undefined when empty array is added', () => {
    assert.notExists(tail([]));
  })

  it("get the tail values of an array", () => {
    const arr = tail([1, 2, 3]);
    assert.deepEqual(arr, [2, 3]);
  });
});
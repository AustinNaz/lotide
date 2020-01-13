const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it('return undefined when empty array is added', () => {
    assert.notExists(head([]), 5);
  })

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns Hello from array with words", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
});
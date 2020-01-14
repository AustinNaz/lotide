const assert = require('chai').assert;
const eqObjects = require('../index').eqObjects;

describe('#eqObjects', () => {
  it('Compare same objects should be equal', () => {
    const ba = { b: "2", a: "1" };
    const bc = { b: "2", a: "1" };
    assert.isTrue(eqObjects(bc, ba));
  });

  it('Compare different objects, should be false', () => {
    const ab = { a: "1", b: "3" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });

  it('Compare objects with arrays, should be equal', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    // eqObjects(cd, dc); // => true
    assert.isTrue(eqObjects(cd, dc));
  });

  it('Compare objects with arrays, should be false', () => {
    const cd = { c: "1", d: [2, 3] };
    const dc = { d: ["2", 3], c: "1" };
    // eqObjects(cd, dc); // => true
    assert.isFalse(eqObjects(cd, dc));
  });

  it('Compare nested Objects, should be true', () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('Compare nested Objects, should be false', () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: { c: 2} };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('Compare nested Objects with arrays, should be true', () => {
    const obj1 = { a: 2, b: { k: 5, c: 3, d: { g: 6, l: [5, 4, 2], } }, e: 5 };
    const obj2 = { a: 2, b: { k: 5, c: 3, d: { g: 6, l: [5, 4, 2], } }, e: 5 };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('Compare nested Objects with arrays, should be false', () => {
    const obj1 = { a: 2, b: { k: 5, c: 3, d: { g: 6, l: [5, 4, 2], } }, e: 5 };
    const obj2 = { a: 2, b: { k: 5, c: 3, d: { g: 6, l: [5, 4], } }, e: 5 };
    assert.isFalse(eqObjects(obj1, obj2));
  })
});
const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

describe('#countOnly', () => {
  const firstNames = [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason","Salima", "Fang", "Joe"];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  it('Counts that Jasons name comes up once', () => {
    assert.strictEqual(result1['Jason'], 1)
  });

  it('Counts that Karimas name is not in the array', () => {
    assert.notExists(result1['Karima'])
  });
});
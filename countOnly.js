const countOnly = function(allItems, itemsToCount) {
  let count = 0;
  const results = {};
  for (item of allItems) {
    // count += 1;
    if (itemsToCount[item]){
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    // console.log(items);
  }
  return results;
};

module.exports = countOnly;
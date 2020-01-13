const middle = function(arr) {
  let rtnArr = [];
  if (!arr || arr.length === 0) {
    return undefined;
  } else {
    if (arr.length <= 2) {    // Keep the array empty if 2 or less objects
      rtnArr = [];
    } else if (!(arr.length % 2)) {   // If the array has an even number of objects, add both the middle numbers
      rtnArr.push(arr[(arr.length / 2) - 1], arr[(arr.length / 2)]);
    } else {
      rtnArr.push(arr[Math.ceil((arr.length / 2) - 1)]);    // If its an odd number of objects, add the middle object
    }
  }
  return rtnArr;
};

module.exports = middle;
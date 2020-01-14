const without = function(arr, remove) {
  let withoutArr = [];
  let array = arr;
  let remArr = remove;

  if (!Array.isArray(arr)) {
    array = Array(arr);
  }
  
  if (!Array.isArray(remove)) {
    remArr = Array(remove);
  }

  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < remArr.length; y++) {   // Iterate through the length of the array, and the length of the removed array inside that one.
      if (array[x] === remArr[y]) {   // Dont add to the new array if one of the remove objects match the original array
      } else {
        if (y === remArr.length - 1) {    // push to the new array if theres no matches
          withoutArr.push(array[x]);
        }
      }
    }
  }
  return withoutArr;
};

module.exports = without;
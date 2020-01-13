const tail = function(arr) {
  let narr = arr.slice(1);    // Slice the array after the first variable
  return narr;
};

module.exports = tail;
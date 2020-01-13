const tail = function(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  } else {
    let narr = arr.slice(1);    // Slice the array after the first variable
    return narr;
  }
};

module.exports = tail;
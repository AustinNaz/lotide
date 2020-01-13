const head = function(arr) {
  let headVar = '';   // Create the final variable
  if (!arr) {   // If there is no array return undefined
    return undefined;
  } else {    // Set the first variable of the array to the final variable and return it
    headVar = arr[0];
    return headVar;
  }
};

module.exports = head;
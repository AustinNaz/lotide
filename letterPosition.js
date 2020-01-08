const letterPositions = function(sentence) {
  const results = {};
  for (index in sentence) {   // Use an in loop to get the index
    if (results[sentence[index]]){    // Find the value at that index and if its in the object
      results[sentence[index]].push(Number(index));   // Push it if its in
    } else {
      results[sentence[index]] = [Number(index)];   // Initiate it if its not
    }
  }
  return results;
};

console.log(letterPositions('hello'));
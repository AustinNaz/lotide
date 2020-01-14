const findKeyByValue = function(genreArr, show) {
  for (genre in genreArr) {   // Iterate through the objects
    if (genreArr[genre] === show) {   // Find out if the show is the same as entered
      return genre;   // Return the genre
    }
  }
};

module.exports = findKeyByValue;
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqArrays = function(arr1, arr2) {
  let isEqual = false;
  if (arr1.length !== arr2.length) return false;    // If array lengths arent equal automatically make false

  for (let x = 0; x < arr1.length; x++) {   // Iterate over one of the array lengths
    if (arr1[x] !== arr2[x]) {    // If one of the objects dont equal the other arrays automatically set isEqual to false and exit
      return isEqual = false;
      // return false;
    } else {
      isEqual = true;
    }
  }
  return isEqual;
};

function eqObjects(obj1, obj2) {
  let isEqual = false;
  for (objects of Object.keys(obj1)) {
    // console.log(objects);
    if (typeof obj1[objects] === 'object' && typeof obj2[objects] === 'object' &&  !Array.isArray(obj1[objects]) && !Array.isArray(obj2[objects])) {
      console.log('is Object');
      return eqObjects(obj1[objects], obj2[objects]);
    } else if (Array.isArray(obj1[objects]) && Array.isArray(obj2[objects])) {
      console.log('is Array');
      isEqual = eqArrays(Object.keys(obj1[objects]).sort(), Object.keys(obj2[objects]).sort());
    }

    if (obj1[objects] === obj2[objects]) {
      // console.log('equal');
      isEqual = true;
    } else if (eqArrays(obj1[objects], obj2[objects])) {
      isEqual = true;
    } else {
      isEqual = false;
      return console.log(isEqual);
    }
  }
  return console.log(isEqual);
};


// const ab = { a: "1", b: "3" };
// const ba = { b: "2", a: "1" };
// const bc = { b: "2", a: "1" };
// eqObjects(bc, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// const cx = {c: '4', d: ['2', 3, 4]}
// const cr = {c: '4', d: ['2', 3]}
// eqObjects(cx, cr)

// eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true

// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
eqObjects({
  a: 2,
  b: {
    k: 5,
    c: 3,
    d: {
      g: 6,
      l: [5, 4, 2],
    }
  },
  e: 5
}, {
  a: 2,
  b: {
    k: 5,
    c: 3,
    d: {
      g: 6,
      l: [5, 4, 2],
    }
  },
  e: 5
})
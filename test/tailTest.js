const assertEqual = require('../assertEqual')
const tail = require('../tail');


tail(['test', 'next test', 'nextnexttest']);
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words[0], 'Lighthouse'); // original array should still have 3 elements!
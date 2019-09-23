const assertEqual = require('../assertEqual');
const tail = require('../tail');

//testing
const testInput = ["Hello","Lighthouse","Labs"];
const test1 = tail(testInput);
assertEqual(test1.length, 2);
assertEqual(test1[0], "Lighthouse");
assertEqual(testInput.length,3);
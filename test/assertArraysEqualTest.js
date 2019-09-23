const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual([1, 2, 3], [1, 2, 3]); //test arrays are equal
assertArraysEqual([1, 2, 3], [1, 3, 3]); //test arrays are unequal
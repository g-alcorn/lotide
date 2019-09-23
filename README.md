# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @g-alcorn/lotide`

**Require it:**

`const _ = require('@g-alcorn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns item at index 0
* `middle(array)`: returns the middle element(s) of any array with more than two items
* `tail(array)`: returns all of array except for index 0
* `eqArrays(array1, array2)`: returns true/false, compares arrays for strict equality
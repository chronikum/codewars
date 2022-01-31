"use strict";

function flattenAndSort(array) {
  let fullArray = []
  array.forEach(arr => arr.forEach(num => fullArray.push(parseInt(num))))
  return fullArray.sort((a, b) => parseInt(a) - parseInt(b));
}
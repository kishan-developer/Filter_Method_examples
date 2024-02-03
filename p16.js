// filtering array within an array

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

const flatArray = matrix.filter(arr => Array.isArray(arr)).flat();

console.log(flatArray);

/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

// use-case => filtring a nested array by filtering out non-array elements
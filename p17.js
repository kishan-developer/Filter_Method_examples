
// filtering based an extenal criteria

const referenceData = [2,4,6];
const numbers = [1,2,3,4,5,6];
const filteredNumbers = numbers.filter(num => referenceData.includes(num));
console.log(filteredNumbers);
// [ 2, 4, 6 ]

// use-case => filtering data based on a reference list
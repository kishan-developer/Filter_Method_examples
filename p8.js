//use-case - selecting every second item from a list

const numbers = [1,2,3,4,5];
const oddIndex = numbers.filter((num,index)=> index%2 !==0);
console.log(oddIndex); // [2,4]
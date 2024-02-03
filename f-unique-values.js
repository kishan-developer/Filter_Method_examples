const  numbers  = [1,2,2,3,4,4,4,5];
const uniqueNumber = numbers.filter((num , index , array) => array.indexOf(num)===index);
console.log(uniqueNumber);

// [ 1, 2, 3, 4, 5 ]
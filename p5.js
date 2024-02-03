//filtering by type

const  mixedData  = [1, "apple",true,5 , "orange"];
const numbersOnly = mixedData.filter(item => typeof item === 'number');
console.log(numbersOnly); 

 //  [ 1 , 5]
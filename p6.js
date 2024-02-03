//  filtering by based on a  function

const numbers = [1,2,3,4,4,5,6]
const filterd = numbers.filter(num => {
    return num > 2 && num%2===0;
});
console.log(filterd);

// [4 ,6]
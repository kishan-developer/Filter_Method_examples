// filtering non-prime numbers
const numbers = [1,2,3,4,5,6,7,8,9];

const prime = numbers.filter(num => {
    for(let i=2; i<num; i++)
        if(num%i === 0) return false;
    return num > 1;
});
console.log(prime);
// [ 2, 3, 5, 7 ]

// use-case => filtering out non-prime numbers from a list
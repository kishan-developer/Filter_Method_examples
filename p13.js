// filtering null or undefinded values

const data = [1,null, 3, undefined , 5];
const validValues = data.filter(value => value !== null && value !== undefined);
console.log(validValues);
// [ 1, 3, 5 ]
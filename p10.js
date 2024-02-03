
// Filtering based on multiple conditions

const people = [
    {name:"alice", age:25, hasLicense:true},
    {name:"bob", age: 18, hasLicense: false}
];
const eligibleDrivers = people.filter(person => person.age>=18 && person.hasLicense);
console.log(eligibleDrivers);
// [ { name: 'alice', age: 25, hasLicense: true } ]
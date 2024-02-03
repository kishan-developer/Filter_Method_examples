// filtering by substring

const fruits = ["apple","banana","orange","kiwi"];
const includesA = fruits.filter(fruit => fruit.includes("a"));
console.log(includesA);
// [ 'apple', 'banana', 'orange' ]
// real-life-use => searching for items that contain a specific substring

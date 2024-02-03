
// filtering based on use Input

const items = ["apple","banana","Orange","Kiwi"];
const userInput = "Ki";
const filteredItems = items.filter(item => item.includes(userInput));
console.log(filteredItems);
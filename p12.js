
// filtering by regular expression
const words = ["apple","banana","orange","kiwi"];
const regexFiltered = words.filter(word => /^a/.test(word));
console.log(regexFiltered);
// ['apple']
// use-case => filtering data based on a pattern match

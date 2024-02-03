const scores = [45,67,89,34,78];
const passed = scores.filter(score => score >= 60 && score <=90);
console.log(passed);

// output = [ 67, 89, 78 ]

// use => filtering scores within a specific range

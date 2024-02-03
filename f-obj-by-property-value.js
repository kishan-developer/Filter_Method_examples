
// real -life -use => filtering products based on price in an e-commerce application

const products = [
    { name : "Laptop", price : 800},
    { name : "Mobile", price : 20000},
    { name : "watch" , price : 1500}
]

const affordableProducts = products.filter(product => product.price < 900);
console.log(affordableProducts);

// [ { name: 'Laptop', price: 800 } ]

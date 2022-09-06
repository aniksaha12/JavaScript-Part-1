// sort method
// ASCII TABLE
// char : ascii value

// 5, 9, 1200, 400, 3000
// 5, 9, 400, 1200, 3000

// ["5", "9", "1200", "400", "3000"]
// [53, 57, 49, 52, 51]  

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// const userNames = ['harshit', 'abcd', 'mohit', 'nitish','aabc', 'ABC'];
// userNames.sort();
// console.log(userNames);

// const numbers = [5, 9, 1200, 400, 3000];
//  numbers.sort((a,b)=>{
//      return a-b;
//  });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200, 400
// a-b ---> 790
// a-b ---> positive numb

// a-b ---> negative ----> a,b
// 5, 9 ---> -4
// price lowToHigh HighToLow
const products = [
     {productId: 1, productName : "p1", price : 300},
     {productId: 2, productName : "p2", price : 3000},
     {productId: 3, productName : "p3", price : 200},
     {productId: 4, productName : "p4", price : 800},
     {productId: 5, productName : "p5", price : 5000},
     {productId: 6, productName : "p6", price : 3500},

]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
     return a.price-b.price
});

const HighToLow = products.slice(0).sort((a,b)=>{
     return b.price-a.price
});

console.log(products);

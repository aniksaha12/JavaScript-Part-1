//  difference between dot and bracket notation
const key ="email";
const person ={
    name: "Harshit",
     age: 22,
     "person hobbies" :["guitar","sleeping","Listening music"]
    }

// console.log(person["person hobbies"]);
person[key] = "harshit12@gmail.com";
console.log(person);
//  array destructuring
const myArray =["value1", "value2", "value3", "value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myVar1", "myVar1");
// console.log("value of myVar2", "myVar2");

let [myVar1,myVar2, ...myNewArray] =myArray;
console.log("value of myVar1", "myVar1");
console.log("value of myVar2", "myVar2");
console.log(myNewArray);



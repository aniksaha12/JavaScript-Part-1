// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 78];
// const newArray =[..."123456789"];
// console.log(newArray);

//  spread operator in objects
const obj1 ={
    key1 : "value",
    key2 : "value2",
};
const obj2 ={
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4",
};

// const newObject = { ...obj1, ...obj2};
// const newObject = { ...obj2, ...obj1, key68: "value68"};
const newObject = { ..."abc"};
console.log(newObject );

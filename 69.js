// clone using object.assign

// memory

const obj = {
    key1: "value",
    key2: "value",
}

// const obj2 = {...obj};
const obj2 = object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);
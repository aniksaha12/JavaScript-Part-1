const obj1 = {
    key1: "value1",
    key2: "value2",
}

// __proto__

// official ecmascript documentation

// [[prototype]]

// __proto__, [[prototype]]

// prototype

const obj2 = object.create(obj1);  // {}
// there is one more way to create empty object
     obj2.key3="value3";

     console.log(obj2);

     console.log(obj2.__proto__);

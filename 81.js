function hello(){
    console.log("hello world");
}


// javascript function ===> function + object

// console.log(hello.name);

// you can add your own properties

// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties

// function gives us free space(free space means object, and this object is prototype)

// console.log(hello.prototype); // {}

// only functions provides prototype property

// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};

console.log(hello.prototype.sing());

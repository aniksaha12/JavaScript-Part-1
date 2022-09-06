// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//     let firstName = "harshit";
// console.log(firstName);
// }

// {
//     let firstName = "mohit";
//     console.log(firstName);
// }

// const firstName = "garima";
// console.log(firstName);

// if(true) {
//     var firstName = "harshit";
//     console.log("firstName");
// }

// console.log(firstName);

function myApp(){
    if(true){
        let firstName ="harshit";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();
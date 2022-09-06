// new keyword
// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age)
// }
// const user1 = new createUser("harshit", 6);

// new keyword
// 1.) empty object this = {}
// 2.) return this

// user1.about();


__proto__
// official ecmascript document
// [[prototype]]

// new keyword

// constructor function
function CreateUser(firstName,lastName, email,age, address){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};

CreateUser.prototype.is18 = function(){
    return this.age>= 18;
}
CreateUser.prototype.sing =function(){
    return "la la la la";
}




const user1 = new CreateUser('harshit','varshith', 'harshit@gmail.com',18, "my address");
const user2 = new CreateUser('harsh','varshith', 'hashit@gmail.com',19, "my address");
const user3 = new CreateUser('mohit','varshitha', 'harsht@gmail.com',17, "my address");


console.log(user1);
console.log(user1.is18());
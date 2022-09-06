// method
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}


const person1 ={
    firstName: "mohit",
    age: 18,
    about: personInfo
}

const person2 ={
    firstName: "mohitesh",
    age: 20,
    about: personInfo
}


const person3 ={
    firstName: "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();
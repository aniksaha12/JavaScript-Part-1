// call ***********
// function about (hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician)
// }

// const user1 ={
//     firstName : "harshit",
//     age: 8,
   
// }

// const user2 ={
//     firstName : "harsh",
//     age: 9,
    
// }

// apply
// about.call(user1,["guitar","bach"]);

// bind
// const func = about.bind(user1, "guitar", "bach");
// func();


const user1 ={
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this. age);
    }
   
}

// don't do this mistake

// user1.about();
const myFunc = user1.about;
myFunc();
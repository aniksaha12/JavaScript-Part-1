// callback function

function myFunc2(){
    console.log("inside my func2") 
    console.log(`your name is ${name}`); 
}
function myFunc(callback){
    // sql query
    const data ={}
    console.log("hello there I am func and I can..");
    callback("harshit");
}

myFunc(myFunc2);
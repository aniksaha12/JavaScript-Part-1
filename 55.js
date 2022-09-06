// function returing function

function myFunc(){
    function hello(){
       console.log("hello world") 
    }
    return hello;
}

const ans = myFunc();
comsole.log(ans());
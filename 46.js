// arrow functions

// const singHappayBirhday = function(){
//     console.log("happy birthday to you......");
// }

const singHappyBirthday = () => {
    console.log("happy birthday to you......");
}

singHappayBirhday();

const sumThreeNumbers= function(number1, number2, number3) => {
        return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans);

// const isEven = function(number){
//     return number % 2 == 0;
// }

const isEven = number => {
    return number % 2===0;
}
console.log(isEven(4));


const firstChar= (anyString) =>  anyString[0];
    
console.log(firstChar("harshit"));
    const findTarget= (array, target) => {
        for(let i=0; i<array.length; i++){
            if(array[i]===target){
                return i;
            }
        }
        return -1;
    }
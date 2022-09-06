// getter and setters
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.LastName}`
    }
    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("harshit", "Sharma", 8);
// console.log(person1.fullName());
// console.log(person1.fullName);
console.log(person1.firstname);
console.log(person1.lastName);
// person1.setName("mohit", "vashistha");
// person1.firstName = "mohit";
// person1.lastName = "vashistha";

console.log(person1.firstName);
console.log(person1.lastName);
// static methods and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    get fullName(){
        return `${this.firstName} ${this.LastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split("")
        this.firstName = firstName;
        this.lastName = lastName;
    }

eat(){ 
    return `${this.name} is eating`;
}

isSuperCute(){
    return this.age <= 1;
}

isCute(){
    return true;
}
}
const person1 = new Person("harshit", "sharma", 8);
// console.log(person1.eat());
const info = Person1.classInfo();
console.log(info);
const userMethods = {
    about : function(){
        retun `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return 'too na na na la la';
    }
}

function createUser(firstName,lastName, email,age, address){
    const user = object.create(userMethods); // {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
     return user;
}

const user1 = createUser('harshit','varshith', 'harshit@gmail.com',18, "my address");
const user2 = createUser('harsh','varshith', 'hashit@gmail.com',19, "my address");
const user3 = createUser('mohit','varshitha', 'harsht@gmail.com',17, "my address");
console.log(user1);
console.log(user1.about());

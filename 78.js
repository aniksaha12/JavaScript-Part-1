const userMethods = {
    about : function(){
        retun `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(firstName,lastName, email,age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.about = userMethods.is18;

    return user;
}

const user1 = createUser('harshit','varshith', 'harshit@gmail.com',18, "my address");
const user2 = createUser('harsh','varshith', 'harshit@gmail.com',19, "my address");
const user3 = createUser('mohit','varshitha', 'harshit@gmail.com',17, "my address");
console.log(user1.about());
console.log(user3.about());
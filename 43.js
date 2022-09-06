// nested destructuring
const users= [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [{firstName: user1firstName}, ,{gender: user3gender}] = users;
console.log(user1firstName);
console.log(user3gender);
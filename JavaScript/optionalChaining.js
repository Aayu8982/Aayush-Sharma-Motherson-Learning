// optional chaining

const user = {
    name: 'Joe',
    age: 20,
    // address: {  city: 'New York' },
};

console.log(user.name); // joe
console.log(user.age); //20
console.log(user.address?.city); // undefined
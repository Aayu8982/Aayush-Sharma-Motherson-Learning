// How to create objects

const person ={
    name: "Aayush SHarma",
    age: 25,
    hobbies: ["sleeping", "dancing", "gardening"]
}

console.log(person);

// How to access data from objects

console.log(person.age);
console.log(person.name);
console.log(person["hobbies"]);


// How to add key value pairs to an object
person.gender = "male";
person["hometown"]="Ratlam"

console.log(person);



// Differnce between dot and bracket notation

const employee = {
    name: "Aayush SHarma",
    age: 25,
    "intrested conpanies" : ["infosys","google","microsoft","apple"]
}

// you can't access via dot notation
// console.log(employee.intrested companies);

// you can access via bracket notation
console.log(employee["intrested conpanies"]);


// If you want to add key in object

const key="email address"

// you can't add key in object with dot notation
person.key="aayush.sharma@gmail.com";
console.log(person); // key="aayush.sharma@gmail.com"

//you can add key in object with bracket notation
person[key]="aayush.sharma@gmail.com";
console.log(person); // "email address"="aayush.sharma@gmail.com"



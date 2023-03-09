// Object example
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

// console.table() example
console.table(person);

// Accessing Object Properties
console.table(person.firstName);
console.log(person["age"]);

// adding properties
person.hometown ="ratlam";
person["role"] = "SDE";

console.table(person);


// Object Methods
// A method is a function stored as a property.

const person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person1.fullName());

// this keyword
/*
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/
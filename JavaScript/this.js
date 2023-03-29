// /*
// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// */

// // Object
// const person = {
//   firstName: "Aayush",
//   lastName : "Sharma",
//   id       : 001,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(person.fullName());

// // Alone
// let x = this;
// console.log(x);

// function
// function newF() {
//   return this;
// }

// console.log(newF()); // global object

"use strict";
function newF() {
  return this;
}

console.log(newF()); // undefined



// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person2 = {
//     firstName:"Aayush",
//     lastName: "Sharma",
//   }
  
//   let x = person1.fullName.call(person2); 
//   console.log(x);

// "use strict";
// let x = this;
// console.log(x);


const person = {
    firstName:"Aayush",
    lastName: "Sharma",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Parth",
    lastName: "Sharma",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName());
  
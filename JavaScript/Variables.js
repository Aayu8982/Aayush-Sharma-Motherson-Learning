//  {
//   var a = 10; // var has a global scope
//  let b = 10; // let has a block scope
//     const c = 10; // const has a block scope
//  }
//  var a = 20; // var can be reassigned

// //  let b =10; 
// //  let b = 20; // let can't be reassigned

// console.log(a);
// console.log(b);
//  console.log(c);

var a= 10;
{
    var a =20;
    console.log(a);
}
console.log(a);

// 20 20

let x= 10;
{
    let x =20;
    console.log(x); // 20
}
console.log(x); //10
 
// const PI = 3.1414;
// PI = PI + 10; //TypeError: Assignment to constant variable.
// console.log(PI);

// Constant array
const cars = ["Volvo", "BMW", "Hyundai"];

cars[0] = "AUdi";

cars.push("Honda");

console.log(cars);


// Constant Objects

const employee = { name: "Aayush", age: 28 , status: "single" };

employee.age = 25;

employee.company = "Motherson";

console.log(employee);
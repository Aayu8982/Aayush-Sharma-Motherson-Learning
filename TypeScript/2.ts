/*
Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit - writing out the type:
Implicit - TypeScript will "guess" the type, based on the assigned value:
*/

// Explicit
//Parameter 'b' implicitly has an 'any' type.ts(7006)
function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);

// Implicit

function multiply(x: number, y: number) {
  return x * y;
}

const result1 = multiply(10, 20);
console.log(result1);

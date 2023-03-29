// Array
// Declaration
const names: string[] = [];

names.push("Aayush");
names.push("Parth");
names.push("Rohit");
names.push("Abhishek");
names.push("Chiku");

console.log(names);

// Readonly
// The readonly keyword can prevent arrays from being changed.

const fruits: readonly string[] = ["Apple", "Mango", "Orange"];

// Property 'push' does not exist on type 'readonly string[]'
// fruits.push("KIWI");

// Type Inference
// TypeScript can infer the type of an array if it has values.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(4);
//numbers.push("10"); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

let head: number = numbers[0]; // no error
console.log(head);

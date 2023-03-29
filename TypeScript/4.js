// Array
// Declaration
var names = [];
names.push("Aayush");
names.push("Parth");
names.push("Rohit");
names.push("Abhishek");
names.push("Chiku");
console.log(names);
// Readonly
// The readonly keyword can prevent arrays from being changed.
var fruits = ["Apple", "Mango", "Orange"];
// Property 'push' does not exist on type 'readonly string[]'
// fruits.push("KIWI");
// Type Inference
// TypeScript can infer the type of an array if it has values.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(4);
//numbers.push("10"); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
var head = numbers[0]; // no error
console.log(head);

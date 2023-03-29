// TypeScript has special types that may not refer to any specific type of data.
// Type: any
// any is a type that disables type checking and effectively allows all types to be used.
var data = "Aayush Sharma";
data = 280;
console.log(data);
// Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used,
var val;
console.log(val);
val = true;
console.log(val);
val = 7;
console.log(val);
val = "geeks for geeks";
console.log(val);
val = [1, 2, 3, 4];
console.log(val);
val = { name: "rachel" };
console.log(val);
val = Math.random();
console.log(val);
val = null;
console.log(val);
val = undefined;
console.log(val);
// Type: never
// never effectively throws an error whenever it is defined.
//let x: never = true;
//Type 'boolean' is not assignable to type 'never'.ts(2322)
// Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
var y = undefined;
console.log(typeof y);
var z = null;
console.log(typeof z);

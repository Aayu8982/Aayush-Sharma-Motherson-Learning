// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

let ourFirstTuple : [number, Boolean, string];

//ourFirstTuple = [1, "Aayush Sharma", true] // Type 'string' is not assignable to type 'Boolean'.ts(2322)

ourFirstTuple = [1, true, "Aayush Sharma"];

console.log(ourFirstTuple);

// we can push into the first tuple
ourFirstTuple.push("PARTh");
console.log(ourFirstTuple);


const secondTuple : readonly [number, Boolean, string] = [2, false, "Sharma"];
// secondTuple.push("rover"); // Property 'push' does not exist on type 'readonly [number, Boolean, string]'.

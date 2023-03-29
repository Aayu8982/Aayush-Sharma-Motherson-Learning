// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
var ourFirstTuple;
//ourFirstTuple = [1, "Aayush Sharma", true] // Type 'string' is not assignable to type 'Boolean'.ts(2322)
ourFirstTuple = [1, true, "Aayush Sharma"];
console.log(ourFirstTuple);
ourFirstTuple.push("PARTh");
console.log(ourFirstTuple);

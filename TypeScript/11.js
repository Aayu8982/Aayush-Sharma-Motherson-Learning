// TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.
// Return Type
// The type of the value returned by the function can be ex
function getName() {
    return "Aayush Sharma";
}
console.log(getName());
// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
/************************************ */
// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function getAge() {
    console.log(88);
}
getAge();
// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
function getAddition(a, b) {
    return a + b;
}
console.log(getAddition(10, 20));

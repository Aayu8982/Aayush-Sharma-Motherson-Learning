
function Addition(a, b){
    return a + b;
}

console.log(Addition(2, 3)); // 5


// Functions used as a variable values
const c = Addition(5, 4);
console.log(c); // 9 


// IIFE (Immediatly invoked function argument)
const data = (function multiplication(a, b){
    return a * b;
})(5, 3);
console.log(data); // 15



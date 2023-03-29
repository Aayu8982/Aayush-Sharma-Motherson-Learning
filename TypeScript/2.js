// Implicit
//Parameter 'b' implicitly has an 'any' type.ts(7006)
function add(a, b) {
    return a + b;
}
var result = add(10, 20);
console.log(result);
// explicit
function multiply(x, y) {
    return x * y;
}
var result1 = multiply(10, 20);
console.log(result1);

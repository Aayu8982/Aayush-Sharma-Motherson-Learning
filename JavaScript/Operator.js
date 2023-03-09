// Assignment Operator

let a = 10;
console.log(a);

// Addition Operator
let x=10;
let y=20;
let z=x+y;
console.log(z);

// Subtraction Operator
console.log('sub', y-x); //10

// multiplication Operator
console.log('mul', x * y); //200

// division Operator
console.log('div', 100/10); // 10

// Remainder Operator
console.log('remainder', 5%2); // 1


// Increment Operator
let data = 10;
data++;
let myData = data;
console.log('myData', myData); // 11

// Decrement Operator
let XY = 10;
XY--;
let ZX = XY;
console.log('Decrement',ZX); //9

// Exponentiation Operator
console.log('Exponentiation', 5 ** 2); // 25

// Adding JavaScript Strings
let firstName = 'John';
let lastName = 'wick';
let fullName = firstName+' '+lastName;
console.log(fullName);

// Multiplication Operator
let p = 5;
let q = 2;
let r = p * q;
console.log(r);

// (+=) assignment operator
let text1 = "What a very ";
text1 += "nice day";
console.log(text1);


// Adding String and Number
let M = 5 + 5;
let N = "5" + 5;
let O = "Hello" + 5;
console.log(M, N, O);


// JavaScript Comparison Operators
console.log(10 == '10');
console.log(10 === '10');
console.log(10 != '10');
console.log(10 !== '10');
console.log(10 >= 9);
console.log(10 > 0 ? 'Big' : 'Small');

// JavaScript Logical Operators
let A = 6
let B =2;

console.log(A< 10 && B>1);
console.log(A==6 ||  B==1);
console.log(!(A==6));

// typeof operator
console.log(typeof A);
console.log(typeof text1);

// Assignment operator types
let operator = 5;
console.log(operator+=2); // 7
console.log(operator-=2); // 5
console.log(operator*=2); // 10
console.log(operator/=2); //5
console.log(operator**=2); // 25
console.log(operator%=7); // 4

// left shift operator
let t = 5;         // 00000000000000000000000000000101
let u = 2;         // 00000000000000000000000000000010

console.log(t << u); // 00000000000000000000000000010100
// Expected output: 20

// left shift assignment operator
console.log(t <<=2);


// right shift operator
let C = 5;          //  00000000000000000000000000000101
let T = 2;          //  00000000000000000000000000000010
let V = -5;         //  11111111111111111111111111111011

console.log(C >> T);  //  00000000000000000000000000000001
//  1

console.log(V >> T);  //  11111111111111111111111111111110
//  -2

// Right shift assignment operator
console.log(V >>= 2);  //  11111111111111111111111111111110
// -2


// Nullish coalescing assignment operator
// If the first value is undefined or null, the second value is assigned.
let some;
some ??= 200;
console.log('some', some); // 200
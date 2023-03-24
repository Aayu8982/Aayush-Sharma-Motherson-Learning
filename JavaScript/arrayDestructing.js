// Array Destructring

const myArray = ["val1", "val2"];
let [myVal1, myVal2] = myArray;
console.log(myVal1, myVal2); // val1, val2

// If array contains single value
const arr = ["val1"];
let [first, second] = arr;
console.log(first, second); // val1 undefined

// how to skip any value in array
const arr1 = ["val1", "val2", "val3"];
let [one, , two] = arr1;
console.log(one, two); // val1, val3

// how to handle rest elements
const arr2 = ["1", "2", "3", "4", "5"];

// // 1. using slice
// let [x, y] =arr2;
// let restArr = arr2.slice(2);
// console.log(restArr); // [3, 4, 5]

//2. using spread operator

let [x, y, z, ...newparams] = arr2;

console.log(x, y, z); // 1 2 3
console.log(newparams); // [4,5]

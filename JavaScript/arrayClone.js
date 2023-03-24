// How to clone Array

let array1 = ["apple",  "mango", "orange", "banana"];

// 1. using slice method
let array2 = array1.slice(0);
console.log(array2);
console.log(array1 === array2);

// 2. using concat
let array3 = [].concat(array1);
console.log(array3);
console.log(array1 === array3);

// 2. using spread operator
let array4 = [...array1];
console.log(array4);
console.log(array1 === array4);



// how to add more items into new array
let array5 = array1.slice(0).concat("guava","papaya");
let array6 = [].concat(array1,"banana", "chiku");
let array7 = [...array1, "plum", "avacado"]; // [...array1, ...newFruitArray](best way)

console.log(array5, array6, array7);

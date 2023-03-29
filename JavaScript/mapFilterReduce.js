// MAP() Example
// map() creates a new array from calling a function for every array element. and doesn’t change the original array.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// Filter() Example
//The filter() method creates a new array filled with elements that pass a test provided by a function. and doesn’t modify the orignal array.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// reduce()
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
const arr = [1, 2, 3, 4];

const sumOfArray = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumOfArray); //10

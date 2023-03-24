const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());

const nums = [12, 10, 3, 8, 11, 20, 2];
console.log(nums.sort());
console.log(
  nums.sort(function (a, b) {
    return a - b;
  })
);

console.log(
  nums.sort(function (a, b) {
    return b - a;
  })
);

// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.

const numArr = [5, 4, 3, 2, 1];

numArr.forEach(function (i) {
  console.log(i * 2);
});

// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(function (i) {
  return i * 10;
});
console.log("number1 " + numbers1);
console.log("numbers2 " + numbers2);

// flatMap function
const myArr = [1, [2, 3], 4, 5, 6];
const newArr = myArr.flatMap((x) => x);
console.log('newArr ', newArr);

// filter function
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter((x)=> x>18 );

console.log('over18', over18);



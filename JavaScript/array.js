const arr = ["aayush", "parth", "abhishek"];

// toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(arr.toString());

//join()
//The join() method also joins all array elements into a string.

console.log(arr.join("-"));

// push()
// The push() method adds a new element to an array (at the end):
arr.push("ram");
console.log(arr);

//pop()
// The pop() method removes the last element from an array:
console.log(arr.pop());
console.log(arr);

// shift()
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
arr.shift();
console.log(arr);

// unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
arr.unshift("ravi");
console.log(arr);

//Change Elements
arr[arr.length] = "somesh";
console.log(arr);

// concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// flat()
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

/*

Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

const deleted = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(deleted);

fruits.splice(0, 1);
console.log(fruits);

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.
const citrus = fruits.slice(1);
console.log(citrus);

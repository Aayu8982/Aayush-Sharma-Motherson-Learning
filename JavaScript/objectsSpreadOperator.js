// spread operator

const arr1 = ["apple", "banana", "orange"];
const arr2 = ["papaya", "grape"];

const newArray = [...arr1, ...arr2];
console.log(newArray); //[ 'apple', 'banana', 'orange', 'papaya', 'grape' ]

const newArray2 = [..."12345678"];
console.log(newArray2); //['1', '2', '3','4', '5', '6','7', '8']


// spread operator in objects

const obj1 = {
  key1: "apple",
  key2: "banana",
  key3: "orange",
  key1: "papaya"
};

console.log(obj1); //{ key1: 'papaya', key2: 'banana', key3: 'orange' }

const obj2 = {
    key1: "apple",
    key2: "papaya"
  };

const obj3 = {
  key3: "orange",
  key4: "pinapple"
};

const newObj ={...obj2,...obj3, 'key5': 'mosambi'};
console.log(newObj); //{ key1: 'apple', key2: 'papaya', key3: 'orange', key4: 'pinapple',key5: 'mosambi' }


const newObject = {..."abc"};
console.log(newObject); //{ '0': 'a', '1': 'b', '2': 'c' }
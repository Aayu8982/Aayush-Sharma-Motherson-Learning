// clone using Object.assign

const obj={
    a:1,
    b:2,
    c:3,
}
// not cloned beacause using same memory in heap space
// const obj1 = obj;
// obj1.d=10;

// 1. using spread operator
const obj1 = {...obj};
obj1.d = 10;
console.log(obj); //{ a: 1, b: 2, c: 3 }
console.log(obj1); //{ a: 1, b: 2, c: 3, d: 10 }

// 2. using Object.assign

const obj2 = Object.assign({}, obj);
console.log(obj2); //{ a: 1, b: 2, c: 3}

// Computed properties

const key1 = "objkey1";
const key2 = "objkey2";
const key3 = "objkey3";

const value1 = "myvalue1";
const value2 = "myvalue2";
const value3 = "myvalue3";

// option 1
const obj1 = {
    [key1] : value1,
    [key2] : value2
}

console.log(obj1)


// const obj={
//     objkey1: "myvalue1",
//     objkey2: "myvalue2",
//     objkey3: "myvalue3"
// }

// option 2
const obj ={}
obj[key1]=value1
obj[key2]=value2
obj[key3]=value3
console.log(obj);
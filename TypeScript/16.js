// TypeScript Utility Types
var mData = {};
mData.height = 10;
console.log(mData);
var carData = {
    make: "Honda",
    model: "Amaze",
    mileage: 10,
};
console.log(carData);
// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
var customMap = {
    Aayush: 28,
    Ravi: 29,
    parth: 21,
};
console.log(customMap);
var edtata = {
    class: "10th",
};
console.log(edtata);
// Pick
// Pick removes all but the specified keys from an object type.
var edtata1 = {
    name: "Aayush",
};
console.log(edtata1);
var value1 = true; // a string cannot be used here since Exclude removed it from the type.
var point = {
    x: 10,
    y: 20,
};
console.log(point);
var point1 = { x: 10, y: 20 };
console.log(point1);

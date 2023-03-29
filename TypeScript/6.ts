// TypeScript Object Types

let employee : {
    name : string,
    age : number,
    hobbies : string[],
    indian?: boolean,
} =  {
    name : 'Aayush Sharma',
    age : 34,
    hobbies: ['cricket', 'chess'],
};

employee.indian = false;

console.log(employee);

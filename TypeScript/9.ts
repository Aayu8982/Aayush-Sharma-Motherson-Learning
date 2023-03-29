// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

interface Employee {
  name: string;
  age: number;
  hobbies: string[];
};

const MyEmployee: Employee = {
  name: "Aayush",
  age: 36,
  hobbies: ["cricket", "chess"],
};

console.log(MyEmployee);

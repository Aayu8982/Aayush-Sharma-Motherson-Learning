// TypeScript Type Aliases and Interfaces

// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type Aliases
// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type Passout_Year = number;
type Student_Name = string;
type Student_Age = number;

type Student = {
  name: Student_Name;
  year: Passout_Year;
  age: Student_Age;
};

const studentName: Student_Name = "Aayush Sharma";
const studentAge: Student_Age = 28;
const passoutYear: Passout_Year = 2019;

const student: Student = {
  name: studentName,
  age: studentAge,
  year: passoutYear,
};

console.log(student);


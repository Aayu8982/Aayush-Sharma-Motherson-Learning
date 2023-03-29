// TypeScript Casting
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type.

// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

const myFullName: unknown = "Aayush Sharma";
console.log((myFullName as string).length);

const myVar: unknown = "123456";
console.log((myVar as number) * 2);

// Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
let x: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length

// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct,
// for example the following will throw a type error since TypeScript knows casting a string
// to a number doesn't makes sense without converting the data:

// console.log((120 as string).length);
// Conversion of type 'number' to type 'string' may be a mistake because neither
// type sufficiently overlaps with the other. If this was intentional, 
// convert the expression to 'unknown' first.


// Casting with <>
// Using <> works the same as casting with as.

let firstName: unknown = "Aayush";
console.log((<string>firstName).length);



// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum cities {
  ratlam,
  indore,
  ujjain,
  neemuch,
}

console.log(cities.ratlam, cities.indore, cities.ujjain);

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

enum months {
  january = 1,
  february,
  march,
  april,
  may,
  june,
  july,
}

console.log(
  months.january,
  months.february,
  months.march,
  months.april,
  months.may,
  months.june,
  months.july
);

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
var cities;
(function (cities) {
    cities[cities["ratlam"] = 0] = "ratlam";
    cities[cities["indore"] = 1] = "indore";
    cities[cities["ujjain"] = 2] = "ujjain";
    cities[cities["neemuch"] = 3] = "neemuch";
})(cities || (cities = {}));
console.log(cities.ratlam, cities.indore, cities.ujjain);
// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
var months;
(function (months) {
    months[months["january"] = 1] = "january";
    months[months["february"] = 2] = "february";
    months[months["march"] = 3] = "march";
    months[months["april"] = 4] = "april";
    months[months["may"] = 5] = "may";
    months[months["june"] = 6] = "june";
    months[months["july"] = 7] = "july";
})(months || (months = {}));
console.log(months.january, months.february, months.march, months.april, months.may, months.june, months.july);
// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

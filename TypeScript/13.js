// TypeScript Classes
// TypeScript adds types and visibility modifiers to JavaScript classes.
// Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = "Aayush";
person.age = 29;
person.hobbies = ["chess", "gaming"];
console.log(person);

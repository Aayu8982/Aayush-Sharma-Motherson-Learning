class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm in grade ${this.grade}`);
    }
}

let john = new Person("John");
john.sayHello(); // "Hello, my name is John"

let jane = new Student("Jane", 12);
jane.sayHello(); // "Hello, my name is Jane and I'm in grade 12"
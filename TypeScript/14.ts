// Members: Visibility
// Class members also be given special modifiers which affect visibility.
/*

There are three main visibility modifiers in TypeScript.

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
 */

class CollegeStudent {
  //   private readonly name: string;

  public constructor(private name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  //   public setName(name: string) {
  //     Cannot assign to 'name' because it is a read-only property.ts(2540)
  //     this.name = name;
  //   }

  public setName(name: string) {
    this.name = name;
  }
}

const clg_student = new CollegeStudent("Aayush Sharma");
clg_student.setName("Parth Sharma");
console.log(clg_student.getName());

// Property 'name' is private and only accessible within class 'CollegeStudent'.
// console.log(clg_student.name);

// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(10, 20);
console.log(myRectangle.getArea());
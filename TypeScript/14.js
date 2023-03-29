// Members: Visibility
// Class members also be given special modifiers which affect visibility.
/*

There are three main visibility modifiers in TypeScript.

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
 */
var CollegeStudent = /** @class */ (function () {
    //   private readonly name: string;
    function CollegeStudent(name) {
        this.name = name;
        this.name = name;
    }
    CollegeStudent.prototype.getName = function () {
        return this.name;
    };
    //   public setName(name: string) {
    //     Cannot assign to 'name' because it is a read-only property.ts(2540)
    //     this.name = name;
    //   }
    CollegeStudent.prototype.setName = function (name) {
        this.name = name;
    };
    return CollegeStudent;
}());
var clg_student = new CollegeStudent("Aayush Sharma");
clg_student.setName("Parth Sharma");
console.log(clg_student.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRectangle = new Rectangle(10, 20);
console.log(myRectangle.getArea());

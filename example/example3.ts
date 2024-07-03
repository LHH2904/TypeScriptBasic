class Person {
    constructor(public name: string, public age: number) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(
        name: string,
        age: number,
        public studentID: number,
        public grade: string,
        public coursesTaken: string[]
    ) {
        super(name, age);
    }

    displayStudentInfo(): void {
        super.displayInfo();
        console.log(`Student ID: ${this.studentID}, Grade: ${this.grade}`);
        console.log(`Courses Taken: ${this.coursesTaken.join(", ")}`);
    }
}

const student = new Student("Alice", 20, 12345, "A", ["Math", "Science"]);
student.displayStudentInfo();
// quản lý nhân sự
class Employee {
    constructor(
        public name: string,
        public age: number,
        public position: string
    ) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`);
    }
}

// Lớp con Manager kế thừa từ lớp Employee
class Manager extends Employee {
    constructor(name: string, age: number) {
        super(name, age, "Manager");
    }
}

// Lớp con Developer kế thừa từ lớp Employee
class Developer extends Employee {
    constructor(name: string, age: number) {
        super(name, age, "Developer");
    }
}

// Lớp con Designer kế thừa từ lớp Employee
class Designer extends Employee {
    constructor(name: string, age: number) {
        super(name, age, "Designer");
    }
}

// Sử dụng các lớp đã định nghĩa
const manager = new Manager("Alice", 35);
const developer = new Developer("Bob", 28);
const designer = new Designer("Eve", 30);

manager.displayInfo();
developer.displayInfo();
designer.displayInfo();
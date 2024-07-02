// abstract: trừu tượng
// cú pháp: abstract class Employee {...}
// - 1 abstract có thể chứa:
// 1 hoặc nhiều normal method
// 1 hoặc nhiều abstract method(đối với loại này không chứa phần body, chỉ định nghĩa tên method)
abstract class Employee5 {

    constructor(private firstName: string, private lastName: string) {
    }

    //abstract method
    abstract getSalary(): number;

    //normal method
    getFullName():string {
        return `${this.lastName} ${this.firstName}`
    }

    compensationStatement():string {
        return `${this.getFullName()} makes ${this.getSalary()} a month`;
    }
}

// không thể tạo mới 1 đối tượng từ nó
// nó là model(bộ khung) để các class khác noi theo
// const e1 = new Employee5('Hieu','Le')

class FullTimeEmployee extends Employee5 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName); // dùng super để kế thừa lại cha
    }

    // cần viết method này, vì nó được khái báo abstract trở lên
    getSalary(): number {
        return this.salary;
    }
}

const test1 = new FullTimeEmployee('Hieu','Le',1000)
console.log('>>>check test 1',test1.compensationStatement());
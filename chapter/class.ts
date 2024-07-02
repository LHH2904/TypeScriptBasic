class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName():string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let hieu = new Person('123','hieu','le')

// console.log('>>> check class: ',hieu.getFullName())

// - public : truy cập k0 giới hạn
class Employee {
    public empCode: string;
    private empName: string;

    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}

let emp = new Employee('aaa','vvv');
emp.empCode = '123';
// emp.empName = 'Swat';
// console.log('>>> check emp = ',emp);
// - private :
// - protected
class Employee1 {
    protected empCode: number;
    public empName: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
    }
}

class SalesEmployee extends Employee1 {
    private department: string;

    constructor(name:string,code:number,department: string) {
        super(name,code);
        this.department = department;
    }
}

let ert = new SalesEmployee('Jhon',123,'Sales')


//readonly => chỉ dọc => không MODIFY (UPDATE/DELETE)

class Person1{
    readonly birthDay: Date;

    constructor(birthDay: Date) {
        this.birthDay = birthDay;
    }
}

let persona = new Person1(new Date(1990,12,25));
// persona.birthDay = new Date(1991,12,25);
// readyonly khác gì với const?
// const khi thao tác với variable
// readonly thao tác với OOP
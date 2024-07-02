class Person3 {
    private firstName: string;
    private lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName():string {
        return `${this.lastName} ${this.firstName}`;
    }

    describe():string {
        return `This is ${this.lastName} ${this.firstName}`;
    }
}

// để kế thừa 1 class, sử dụng keyword extends

class Employee2 extends Person3 {
    private jobTitle:string;
    constructor(firstName: string, lastName: string, jobTitle: string) {
        // call the constructor of the Person3 class
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }

    //overwrite
    describe():string {
        return `This is overwrite`;
    }
}

let employee = new Employee2('Hieu','Le','Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
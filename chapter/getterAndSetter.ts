//private
class Person2 {
    private _age: number;
    public firstName: string;
    public lastName: string;

    constructor(_age:number, firstName: string, lastName: string) {
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getter
    get age(){
        return this._age;
    }

    set age(age2:number){
        if(age2 < 0 || age2 > 100){
            throw Error ('Invalid age')
        }
        this._age = age2;
    }
}

let person2 = new Person2(25,'Hieu','Le');
let checkAge = person2.age; //getter
person2.age = 34; //setter

console.log('>>> check age',person2)
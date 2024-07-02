class Circle {
    static pi:number = 3.14;
    public test:number = 69;

    static calculateArea(radius:number){
        return this.pi * radius * radius;
    }

    calculateCircumference(radius:number){
        return 2 * Circle.pi * radius;
    }
}

console.log('>>> check pi = ',Circle.pi)
console.log('>>> check pi = ',Circle.calculateArea(10))
const t = new Circle();
console.log('>>> check test = ',t.test)
console.log('>>> check test = ',t.calculateCircumference(10))

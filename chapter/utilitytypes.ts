// Partial: thay đổi tất cả thuộc tính trong 1 đối tượng thành tùy chọn (?)
interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10; //
console.log(pointPart); // 10

// Required thay đổi tất cả các thuộc tính trong một đối tượng thành các thuộc tính bắt buộc.
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);//{ make: 'Ford', model: 'Focus', mileage: 12000 }

// Record là lối tắt để xác định kiểu đối tượng với kiểu khóa và kiểu giá trị cụ thể.
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

console.log(nameAgeMap);//{ Alice: 21, Bob: 25 }

// Omit xóa khóa khỏi một loại đối tượng.
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
};
console.log(bob);//{ name: 'Bob' }

// Pick xóa tất cả các khóa khỏi một loại đối tượng ngoại trừ các khóa được chỉ định.
interface Person {
    name: string;
    age: number;
    location?: string;
}

const lan: Pick<Person, 'name'> = {
    name: 'Bob'
};

// Exclude xóa các kiểu khỏi một hợp nhất.
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true;
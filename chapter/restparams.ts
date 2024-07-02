// Trong TypeScript , Rest parameter có rule:
// - 1 function chỉ có 1 tham số duy nhất rest parameter
// - phải là tham số cuối cùng trong danh sách tham số
// - phải sử dụng với array type
// toán tử 3 dấu chấm giúp copy phần tử của mảng
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

// console.log(getTotal());
// console.log(getTotal(10,20));
// console.log(getTotal(10,20,30));

// map sẽ trả về 1 new array
function multiply(n:number,...m:number[]) {
    return m.map((x) => n * x);
}
const a = multiply(10,1,2,3,4);
// console.log(a)

function Greet(greeting:string,...names:string[]) {
    return greeting + ' ' + names.join(',') + '!';
}

console.log(Greet('Hello')); // Hello !
console.log(Greet('Hello', 'Van Long', 'Nhu Ngoc')); // Hello Van Long,Nhu Ngoc!

// function overloading (viết các hàm giống nhau gọi là overloading,
// hàm sau ghi đè lên hàm trước)
// const addNew = (a:number,b:number) => :number;
// function addNew(a:number,b:number):number;


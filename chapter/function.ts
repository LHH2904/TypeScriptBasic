//anonymous function
//     () => {}
function sum(a:number,b:number) {
    return a + b;
}
// console.log('>>> check sum = ',sum(5,8))

//arrow function
const sum2 = (a:number, b:number) => {
    return a + b;
}
// console.log('>>> check sum2 = ',sum2(5,8))

// định nghĩa kiểu giá tri cho từng biến truyền vào
// và định nghĩa kiểu giá trị do hàm trả về
const sum3 = (x:number, y:number):number => {
    return x + y;
    // return 'abc';
}
// console.log('>>> check sum3 = ',sum3(5,2))

//optional params (tham số tự chọn không bắt buộc phải có)
const sum4 = (x:number, y:number,z?:number) => {
    if(z) return x + z +y;
    return x + y;
}
console.log('>>> check sum3 = ',sum4(5,2,3))
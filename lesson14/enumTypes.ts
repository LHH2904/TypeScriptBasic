// Enum là 1 nhóm các giá trị hằng số
// Ví dụ: STATUS = [PENDING,SUCCESS,FAILED]
// Để định nghĩa enum:
// - Sử dụng keyword enum và tên cho enum
// - Định nghĩa các giá trị hằng số
// enum name {constant1, constant2,...};
// khai báo enum như khai báo const
// Điểm khác biệt giua enum và const là có thể nhóm từng thàng enum lại
enum API_STATUS {
    PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'
}

let a = API_STATUS.PENDING;
let b = API_STATUS.FULFILLED;
let c = API_STATUS.REJECTED;

console.log('>>> a = ',a,' b =',b, ' c = ',c)
// >>> a =  0  b = 1  c =  2 (nó sẽ in ra trị số của mảng)

// Frontend: syntax
// => nó giúp đồng bộ hóa cú pháp
// console.log('>>> a = ',a,' b =',b, ' c = ',c)
// >>> a =  PENDING  b = FULFILLED  c =  REJECTED


// Đây là mảng không giới hạn số phần tử, tuy nhiên chỉ muốn khai báo 1 mảng
// có 2 phần tử thôi (sử dụng Tuple)
let skills : (string|number)[] = ['html',45];
skills.push('coding');
skills.push(46);

// Tuple: dataType/size/order(đặt trình tự như thế nào thì khai báo như vậy)

let skill2 : [string,number] = ['html',45];
let skill3 : [boolean,string,number];
skill3 = [true,'html',45];

// Optional Tuple (có thể xuất hiện/không xuất hiện) =>sử dụng ? đứng sau type
// và tham số optional phải đă cuối cùng
let skill4 : [boolean,string,number?];
skill4 = [true,'html'];
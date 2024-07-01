// switch case
const age:number = 27;
switch (age){
    // sử dụng mô hình thác nước khi cả 2 case cùng trả về 1 kết quả
    case 27:
    case 25:
        console.log('đã đi làm');
        break;
    case 20:
        console.log('đang đi học');
        break;
    default:
        console.log('run default');
}
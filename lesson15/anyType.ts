// đôi khi dùng biến để lưu giá trị, nhưng không chắc chắn về kiểu dữ liệu của biến(data types)
// dùng any sẽ làm cho trình compiler bỏ cái việc check kiểu giá trị
// nên hạn chế dùng any
let name2: any = 'HieuLe';
name2 = true;
name2 = 96;
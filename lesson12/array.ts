let test: string[] = ['hieule','hoc typescript'];
test.push('34 tuoi');
// test.push(45);
console.log(test);
// Hiện tại muốn truyền số 45 vào mảng được thiết lập là chuỗi string khồng
// => sử dụng mixed type
let test2: (string|number)[] = ['hieule','hoc typescript',45,67];
test2.push(21);
console.log('sử dung mixed type',test2);
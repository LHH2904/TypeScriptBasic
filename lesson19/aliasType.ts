// Type alias cho phép chúng ta  tạo mới 1 kiểu type từ những type đã tồn tại
// Cú pháp: type alias = existingType;
// existingType là tất cả những type hợp lệ của TypeScript (string, number, boolean,...)
Ví dụ:

type ky_tu = string;
let message: ky_tu //same as string type

// Sử dụng aliases rất hữu ích với union type giúp thu gon code

//before:
let myVar: string|number|boolean = 'just eat';
myVar = {abc,'def'};// error
//after
type superType = string|number|boolean;
let myVar1:superType = 'just fun';
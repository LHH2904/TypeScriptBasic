// interface 'định nghĩa' cách viết code bằng cách ccung cấp các công cụ
// kiểm soát chặt chẽ việc khai báo type
// định nghĩa 1 cấu trúc dữ liệu
interface IPerson {
    firstName: string;
    lastName: string;
    address?: string;
}

function getFullName(person:IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'Hieu',
    lastName: 'học lập trình',
}

console.log(getFullName(person));

//tại sao lại dùng interface thay vì dùng type
// khác nhau về cú pháp
// Interface
// interface Point {
//     x: number;
//     y: number;
// }
//
// interface SetPoint {
//     (x: number, y: number): void;
// }
// Type alias
// type Point = {
//     x: number;
//     y: number;
// };
//
// type SetPoint = (x: number, y: number) => void;
// union tương đương join

function addNumberOrString(a:any, b:any) {
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if(typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error('Parameters must be number or string');
}

// Nếu a,b đều là number => tính tổng a và b
// Nếu a,b đều là string => nối chuỗi a và b
// Nếu a.b không là number hoặc string => báo lỗi

console.log('>>> check: ',addNumberOrString(21,9))
// >>> check:  30
console.log('>>> check: ',addNumberOrString('hieule','html'))
// >>> check:  hieulehtml
// lỗi khi running
console.log('>>> check: ',addNumberOrString(true,'html'))

// lỗi khi compile (sử dụng union type)
function addNumberOrString1(a:string|number|object|boolean, b:string|number) {

}
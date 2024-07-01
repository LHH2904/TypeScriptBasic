// Never
// Any: trả về bất cứ thứ gì (áp dụng cho function và variable)
// Void: không cần trả ra dữ liệu(thực chất vẫn trả ra :v), không cần keyword return
// (áp dụng chủ yếu cho function)
// Never: không bao giờ trả ra giá trị. promise!

// kiểu dữ liệu never được sử dụng khi chắc chắn rằng 1 điều gì đó không bao giờ xảy ra

// Ví dụ:
// - 1 function handle exception  (xử lí lỗi)
// function throwError(errorMessage:string):never {
//     throw new Error(errorMessage);
// }

function handleException (errorMessage:string):never {
    throw Error(errorMessage);
}

function runInfinity() :void {
    // while (true) {
    //     console.log('running ...')
    // }
}

// test
// handleException('just a test error')
let a = runInfinity();
console.log('>>check a=',a);
// >>check a= undefined
// khi dùng kiểu void nó trả ra undefined
let b = handleException('just a test error')
console.log('>>check b=',b);
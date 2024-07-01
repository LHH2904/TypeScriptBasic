// định nghĩa 1 function, quy ịnh kiểu giá trị trả về cho nó
const sum = (a:number,b:number):number => {
    return a + b;
}

// không trả về 1 cái gì cả việc vết code như dưới giúp nó tường minh hơn
const handelLogs = (message:string):void => {
    console.log('>>> message: ',message)
}
// lesson20
let age:number = 15;

// khi truyền vào 1 biến (0 truyền vào dk so sanh thì js/ts tự động convert sang boolean)
if (age) {
    console.log('You can build life');
}
else{
    console.log('You can learn');
}

let discount:number;
let itemCount = 7;
if(itemCount > 0 && itemCount <= 5) {
    discount = 5;
}else if(itemCount > 5 && itemCount <= 10) {
    discount = 10;
}else{
    discount = 15;
}

console.log(`You got ${discount}% discount for ${itemCount} prod`);

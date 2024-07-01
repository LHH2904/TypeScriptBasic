// Vòng lặp for
for (let i = 0;i<10;i++) {
    console.log('>>> i = ',i)
}

//Vòng lặp while
let counter = 0;
// while (counter < 5) {
//     console.log(counter)
//     counter++;
// }

while (counter < 5) {
    console.log(counter);
    if(counter % 2 === 0) break;
    counter++;
}

// Vòng lặp Do While
let n1 = 6;
do {
    console.log('>>> n1 = ',n1);
    if(n1 % 2 === 0) break;
    n1++;
}while(n1 < 5);

// keyword break

let products = [
    {name:'phone',price:700},
    {name:'tablet',price:900},
    {name:'laptop',price:1200}
]
for (let i = 0; i < products.length; i++) {
    if(products[i].price == 1200) break;
    console.log(products[i]);
}

// keyword continue
for (let index = 0;index<9;index++) {
    if (index % 2 === 1) continue;
    console.log(index)
}

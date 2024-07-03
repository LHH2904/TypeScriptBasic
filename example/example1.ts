// Đảo ngược chuỗi trong TypeScript
function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
}
// tách ra, đảo ngược và nối lại

let inputString = 'Hello World';
let t = reverseString(inputString);
// console.log(t);

// Tìm số lơn nhất trong mảng
function findMaxNumber(numbers: number[]): number {
    let maxNumber: number = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    return maxNumber;
}

let numberArray: number[] = [10, 3, 22, 7, 15];
let maxNumber: number = findMaxNumber(numberArray);
// console.log(maxNumber);

// Tính giai thừa 1 số nguyên dương
function calculateFactorial(number: number): number {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        let factorial: number = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

let inputNumber: number = 5;
let resultFactorial: number = calculateFactorial(inputNumber);
// console.log(`Giai thừa của ${inputNumber} là: ${resultFactorial}`);

// Sắp xếp mảng số theo thứ tự giảm dần trong TypeScript
function sortDescending(numbers: number[]): number[] {
    return numbers.sort((a, b) => b - a);
}
let inputArray: number[] = [5, 2, 9, 1, 6];
let sortedArray: number[] = sortDescending(inputArray);

// console.log(`Mảng sau khi sắp xếp giảm dần: ${sortedArray}`);

// Đếm số lần xuất hiện của ký tự trong chuỗi
function countOccurrences(inputString: string, charToCount: string): number {
    let count: number = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === charToCount) {
            count++;
        }
    }

    return count;
}

let inputString1: string = "Hello, how are you?";
let charToCount: string = "o";
let occurrences: number = countOccurrences(inputString1, charToCount);

console.log(`Số lần xuất hiện của ký tự '${charToCount}' trong chuỗi là: ${occurrences}`);



//djshdjsahdjkhasdjkhasjkdhasjkdhsajkdhsjkadhjkasdhjkashdjkashjkdhsa
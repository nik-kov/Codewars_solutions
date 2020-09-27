// Write a function named sumEvenNumbers, taking a sequence
// of numbers as single parameter. Your function must return
// the sum of the even values of this sequence.
// Only numbers without decimals like 4 or 4.0 can be even.
// Input
// sequence of numbers: those numbers could be integers and/or floats.
// For example, considering this input value : [4,3,1,2,5,10,6,7,9,8],
// then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).

// Напишите функцию с именем sumEvenNumbers, принимая последовательность
// чисел в качестве единственного параметра. Ваша функция должна возвращать
// сумму четных значений этой последовательности.
// Четными могут быть только числа без десятичных знаков, например 4 или 4,0.
// Ввод
// последовательность чисел: эти числа могут быть целыми и / или плавающими.
// Например, учитывая это входное значение: [4,3,1,2,5,10,6,7,9,8], тогда
// ваша функция должна вернуть 30 (потому что 4 + 2 + 10 + 6 + 8 = 30) .

function sumEvenNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            sum += input[i];
        }
    }
    return sum;
}
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


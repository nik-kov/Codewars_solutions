// Write a method sum (sum_array in python, sumarray in julia,
// SumArray in C#) that takes an array of numbers and returns
// the sum of the numbers. These may be integers or decimals
// for Ruby and any instance of Num for Haskell. The numbers
// can also be negative. If the array does not contain any
// numbers then you should return 0.

// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2

// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// Записываем сумму метода (sum_array в python, sumarray в julia,
// SumArray в C #), который принимает массив чисел и возвращает
// сумма чисел. Это могут быть целые или десятичные числа.
// для Ruby и любой экземпляр Num для Haskell. Число
// также может быть отрицательным. Если массив не содержит
// числа, тогда вы должны вернуть 0.

// числа = [1, 5.2, 4, 0, -1]
// помещает сумму (числа)
// 9.2

// Вы можете предположить, что вам даны только числа.
// Вы не можете предполагать размер массива.
// Вы можете предположить, что получили массив, и если массив пуст, верните 0.

function sum (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sum ([1, 5.2, 4, 0, -1]));




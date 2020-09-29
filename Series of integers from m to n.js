// Write a function that accepts two arguments and generates
// a sequence containing the integers from the first argument
// to the second inclusive.
// Input
// Pair of integers greater than or equal to 0. The second argument
// will always be greater than or equal to the first.
// Example:
// generateIntegers(2, 5) // --> [2, 3, 4, 5]

// Напишите функцию, которая принимает два аргумента и генерирует
// последовательность, содержащая целые числа из первого аргумента
// до второго включительно.
// Ввод
// Пара целых чисел больше или равная 0. Второй аргумент
// всегда будет больше или равно первому.
// Пример:
// generateIntegers (2, 5) // -> [2, 3, 4, 5]


function generateIntegers(m, n) {
    let arr = [];
    for (let i = m; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(generateIntegers(2, 5));
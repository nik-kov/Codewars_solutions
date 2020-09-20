// Given a list of numbers, determine whether the sum of its
// elements is odd or even. Give your answer as a string matching
// "odd" or "even". If the input array is empty consider it as:
// [0] (array with a zero).

// Учитывая список чисел, определите, является ли сумма его
// элементов нечетной или четной. Дайте свой ответ в виде строки,
// соответствующей «нечетному» или «четному». Если входной
// массив пуст, считайте его: [0] (массив с нулем).

// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

function oddOrEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum % 2 ? 'odd': 'even';
}

console.log(oddOrEven([-1023, -1, 3]));


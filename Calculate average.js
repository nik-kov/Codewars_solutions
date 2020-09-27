// Write function avg which calculates average of numbers in given list.
// Напишите функцию avg, которая вычисляет среднее значение чисел в данном списке.
// Test.assertEquals(find_average([1,1,1]), 1);
// Test.assertEquals(find_average([1,2,3]), 2);

function find_average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(find_average([1,2,3]));

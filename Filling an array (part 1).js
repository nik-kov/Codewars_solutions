// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing
// the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]

// // Нам нужен массив, но не какой-нибудь старый массив, а массив с содержимым!
// // Напишите функцию, которая создает массив с числами от 0 до N-1.
// // Например, следующий код приведет к массиву, содержащему
// // числа от 0 до 4:
// // arr (5) // => [0,1,2,3,4]

function arr(n) {
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        arr2.push(i);
    }
    return arr2;
}
console.log(arr(5));
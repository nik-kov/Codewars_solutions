//Create a function named divisors/Divisors that takes an
// integer n > 1 and returns an array with all of the integer's
// divisors(except for 1 and the number itself), from smallest
// to largest. If the number is prime return the string '(integer)
// is prime' (null in C#) (use Either String a in Haskell and
// Result<Vec<u32>, String> in Rust).

// Создайте функцию с именем divisors / Divisors, которая принимает
// целое число n> 1 и возвращает массив со всеми делителями целого
// числа (кроме 1 и самого числа), от наименьшего до наибольшего.
// Если число простое, верните строку '(integer) is prime' (null в C #)
// (используйте Either String a в Haskell и Result <Vec <u32>, String> в Rust).


function divisors(n) {
    let arr = [];
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    return arr.length ? arr : `${n} is prime`;
}

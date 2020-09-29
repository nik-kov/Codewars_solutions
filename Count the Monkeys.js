// You take your son to the forest to see the monkeys.
// You know that there are a certain number there (n),
// but your son is too young to just appreciate the full number,
// he has to start counting them from 1.
//
// As a good parent, you will sit and count with him.
// Given the number (n), populate an array with all numbers
// up to and including that number, but excluding zero.
// For example:
// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

// Вы ведете сына в лес, чтобы увидеть обезьян.
// Вы знаете, что там определенное число (n),
// но ваш сын слишком мал, чтобы оценить всю цифру,
// он должен начать считать их с 1.
//
// Как хороший родитель, вы будете сидеть и считать вместе с ним.
// Учитывая число (n), заполняем массив всеми числами
// до этого числа включительно, но без нуля.
// Например:
// monkeyCount (10) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount (1) // -> [1]

function monkeyCount(n) {
    let arr = [];
    for (let i = 1; i < n + 1; i++) {
        arr.push(i);

    }
    return arr;
}
console.log(monkeyCount(8));
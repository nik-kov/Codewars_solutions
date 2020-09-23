// I assume most of you are familiar with the ancient legend of the
// rice (but I see wikipedia suggests wheat, for some reason) problem,
// but a quick recap for you: a young man asks as a compensation
// only 1 grain of rice for the first square, 2 grains for the second,
// 4 for the third, 8 for the fourth and so on, always doubling the previous.
// Your task is pretty straightforward (but not necessarily easy):
// given an amount of grains, you need to return up to which
// square of the chessboard one should count in order to get at least as many.
// As usual, a few examples might be way better than thousands of words from me:
// Input is always going to be valid/reasonable: ie:

// squaresNeeded(0) === 0
// squaresNeeded(1) === 1
// squaresNeeded(2) === 2
// squaresNeeded(3) === 2
// squaresNeeded(4) === 3

// a non negative number; extra cookie for not using a loop to
// compute square-by-square (at least not directly) and instead
// trying a smarter approach [hint: some peculiar operator];
// a trick converting the number might also work: impress me!



// Я полагаю, что большинство из вас знакомо с древней легендой о
// проблема с рисом (но я вижу, что Википедия по какой-то причине предлагает пшеницу),
// но краткий итог: молодой человек просит в качестве компенсации
// только 1 зерно риса на первый квадрат, 2 зерна на второй,
// 4 для третьего, 8 для четвертого и так далее, всегда удваивая предыдущее.
//
// Ваша задача довольно проста (но не обязательно проста):
// учитывая количество зерен, до которого нужно вернуть
// квадрат шахматной доски нужно посчитать, чтобы получить как минимум столько же.

// Как обычно, несколько примеров могут быть лучше моих тысяч слов:
// Ввод всегда будет действительным / разумным: т.е.

// необходимые квадраты (0) === 0
// squaresNeeded (1) === 1
// squaresNeeded (2) === 2
// squaresNeeded (3) === 2
// squaresNeeded (4) === 3


// неотрицательное число; дополнительный файл cookie, чтобы не использовать цикл для
// вычисляем квадрат за квадратом (по крайней мере, не напрямую) и вместо этого
// пробуем более разумный подход [подсказка: какой-то необычный оператор];
// уловка с преобразованием числа также может сработать: впечатлите меня!



function squaresNeeded(grains){
    let sum = 0;
    let grainssInSqr = 1;
    let count = 0;
    while (sum < grains) {
        sum = sum + grainssInSqr;
        grainssInSqr *= 2;
        count++;
    }
    return count;
}
console.log(squaresNeeded(8));
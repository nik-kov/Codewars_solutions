// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better
// than the average student in your class.
//
// You receive an array with your peers' test scores. Now calculate
// the average and compare your score!
//
// Return True if you're better, else False!
//
// Note:
// Your points are not included in the array of your class's points.
// For calculating the average point you may add your point to the given array!

// // В вашем классе был тест, и вы его прошли. Поздравляю!
// // Но вы амбициозный человек. Вы хотите знать, лучше ли вам
// // чем средний ученик в вашем классе.
// //
// // Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте
// // среднее значение и сравните свой результат!
// //
// // Возвращаем True, если вам лучше, иначе False!
// //
// // Запись:
// // Ваши баллы не включены в массив баллов вашего класса.
// // Для вычисления средней точки вы можете добавить свою точку в данный массив!




function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    return (yourPoints > sum / classPoints.length);
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
//Create a function that will return a string that combines all
// of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping
// them next to each other. Do this for every letter, see example below!
//    E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
//Note: You can expect all of the inputs to be the same length.

// Создаем функцию, которая будет возвращать строку, объединяющую все
// букв трех введенных строк в группах.
// Принимаем первую букву всех входов и группируем
// они рядом друг с другом. Сделайте это для каждой буквы, см. Пример ниже!
// Например, Ввод: «aa», «bb», «cc» => Вывод: «abcabc»
// Примечание: вы можете ожидать, что все входные данные будут одинаковой длины.


function tripleTrouble(one, two, three){
    let newStr = '';
    for (let i = 0; i < one.length; i++) {
        newStr += one[i] + two[i] + three[i];
    }
    return newStr;
}
tripleTrouble('abcd', 'efgh', 'ijkl');


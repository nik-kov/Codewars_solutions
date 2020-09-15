// It's pretty straightforward. Your goal is to create a function
// that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

// Это довольно просто. Ваша цель - создать функцию
// удаляет первый и последний символы строки.
// Вам дан один параметр, исходная строка.
// Вам не нужно беспокоиться о строках, состоящих менее чем из двух символов.

function removeChar(str){
    let newString = '';
    for(let i = 1; i < str.length - 1; i++) {
        newString = newString + str[i];
    }
    return newString;
}
console.log(removeChar('Pasv'));



// function removeChar(str){
//     return str.slice(1, str.length - 1);
// };
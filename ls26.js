// loops - циклы 

// циклы - повторение одного и того же участка кода 

// ++ прибавляет на 1 
// -- отнимает на 1 

// let a = 5; 
// console.log(++a);
// console.log(a);
// постфикс - когда значение сначала выводится потом увеличится 
// префикс - когда сначала увеличит потом выведет 

// while - пока 
// do while - делай пока 
// for - для (цикл)

// Итератор 

// while (условие) {
  // тело цикла 
  // итератор++
// }
// var i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// doWhile

// do {
//   var x = +prompt('введите число !');
// } while (isNaN(x) || x == 2) {
//   console.log(x);
// };
// пока цикл while отдает true он работает и требует результата от do
// как придет false он остановится и отдаст результат от while если он есть 

// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);
// for(итератор; условие; шаг увеличения) {
  // тело цикла 
// }
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// тернарные операторы 

// условие ? выполнится если условие true : выполнится если условие false 

// let a = +prompt('введите число если не число то будет 10');

// a = !isNaN(a) ? a : 10;

// console.log(a);

// for (let i = 0; i < a; i++) {
//   console.log(i);  
// }

// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720
// 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040

// пользователь вводит числовое значение если не числовое то просите 
// ввести заново число не может быть 0
// цикл который увеличивает свое значение по значению факториала 
// который ввел пользователь 
// ваша задача вывести результат факториала в отдельную переменную

// factor - пользовательская переменная для ввода 
// result = 1 
// и математическая операция в цикле 

do {
  var factor = +prompt('введите число');
} while (isNaN(factor) || factor == 0);
let result = 1;
for (let i = 1; i <= factor; i++) {
  result *= i;
}

console.log(result);
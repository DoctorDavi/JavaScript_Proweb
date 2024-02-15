// функции
// это отдельный участок кода который может быть вызван в разных 
// местах вашего кода 

// декларативная 
// function имя функции() {
  // тело функции 
// }

// function hello() {
//   alert('привет я функция')
// }
// hello()

// function sumTwoNumbers(num1 = 3, num2 = 5) {
//   let sum = num1 + num2
//   return sum
// }

// console.log(sumTwoNumbers('привет', ' куку'));

// return остановить функцию и вернуть ее результат 

// Методом называется функция внутри объекта 
// Math - работа с математическими вычислениями 

// console.log(Math);
// Math.floor() - округляет число до наименьшего целого 
// console.log(Math.floor(25.3));
// console.log(Math.floor(-424.853));
// Math.round() - округляет число от 5 в наибольшую сторону 
// если меньше или равно 4 в меньшую   
// console.log(Math.round(25.4));
// console.log(Math.ceil(-23.3));
// Math.ceil() - округляет число до наибольшего целого значения 

// Math.random() - выводит рандомное число от 0 до 1 но 1 никогда не выведет 

// function random() {
//   return Math.floor(Math.random() * 10 + 1)
// }

// console.log(random());
// let num1 = +prompt('введите мин число')
// let num2 = +prompt('введите макс число')
// function rand(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min) + min)
// }

function myRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}
let minInt = +prompt('Введите минимальное число')
let maxInt = +prompt('Введите максимальное число')
for (let i = 0; i < 10; i++) {
  let num1 = myRandom(minInt, maxInt)
  let num2 = myRandom(minInt, maxInt)  
  let pr = +prompt(num1 + ' + ' + num2 + ' =')
  let answer = (num1 + num2) == pr ? 'Молодец' : 'Ошибка'
  console.log(i);
  alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + ' Ваш ответ ' + pr + '. ' + answer)
}

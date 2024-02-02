// условия

// = присвоение
// == сравнение значений 
// === сравнение по значению и типу данных 
// < меньше 
// > больше 
// <=
// >=
// ! - (не) делает все наоборот 
// != не равно 
// console.log(2 == 2);
// console.log(2 == 1);
// console.log(2 == '2');
// console.log(2 === '2');

// if если
// else default иначе
// condition условие
// условия задаются для того чтобы проверить то или иное значение для того чтобы 
// выполнить тот или иной код
// if (1 == 1) {
//   console.log('все верно');
//   let a = 3 
//   let b = 5 
//   let c = a + b
//   console.log(c);
// } else {
//   console.log('база');
// }

// let num = prompt('введите привет')

// if (num == 'привет' || num == 'hello') {
//   console.log(num);
// } else {
//   console.log('не привет');
// }
// (||) или который говорит о том что есть еще одно условие которое может быть как true 
// или false 
// есть деление условия на 2 или более частей 

// console.log(true || false || false || false);
// true
// console.log(true || false);
// true
// console.log(false || true);
// true
// console.log(false || false);
// false 

// var a = +prompt('первое значение')
// var b = +prompt('второе значение')

if (a < b && !isNaN(a) && !isNaN(b)) {
  console.log(a + ' меньше ' + b);
} else if (a < b && !isNaN(a) && !isNaN(b)) {
  console.log(a + ' больше ' + b);
} else if (a == b && !isNaN(a) && !isNaN(b)) {
  console.log('оба равны');
} else {
  if (isNaN(a) && isNaN(b)) {
    console.log('значения не числовые');
  } else if (isNaN(a)) {
    console.log('первое значение не числовое');
  } else if (isNaN(b)) {
    console.log('второе значение не числовое');
  }
}
// isNaN(значение) - проверить является ли значение NaN
// console.log(isNaN('привет'));
// console.log(isNaN(123));

// && (и) логический оператор который говорит что есть еще одно обязательное условие 

true && true
true
true && false
false
false && true
false
false && false
false 

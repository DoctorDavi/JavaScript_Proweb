// объекты - Object - составной тип данных который состоит из примитивов  
// объекты состоят из ключей и значений 
// const - константа неизменяемый тип переменной 
// если в него положить строку он всегда будет строкой 
// Литеральный объект 
// {} - символы создания объекта 
// const имя перемен = {
// Ключ: значение,
// Ключ: значение,
// Ключ: значение,
// Ключ: значение,
// Ключ: значение,
// }

// let userName = 'Тима'
// let userAge = 25
// let userPets = false
// let education = true

// console.log(user);
// console.log(user.name);

// user.name = 'Тимур'
// console.log(user.name);

// user.from = 'Чирчик'
// console.log('dis' in user);

// typeof проверяет тип данных и выводит этот тип 

// console.log(typeof user);
// console.log(typeof '');
// console.log(typeof 0);
// console.log(typeof NaN);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// Перебор объекта 

// const user = {
//   name: 'Тима',
//   pets: false,
//   educ: true,
//   job: 'Front-end Developer || UI/UX developer || Teacher',
//   age: 25,
// }
// . ссылка на ключ  
// [имя ключа] - обращение к указанному ключу - ссылка  
// console.log(user['job']);
// for (const key in user) {
// console.log(key);
// console.log(user[key]);
// `` - создают строки шаблоны в которых можно поместить 
// переменную в строку без конкатенации 
// Конкатенация - операция склеивания строк 
// Интерполяция - внедрение переменной в строку шаблон ${}
//   console.log(`Ключ: ${key} значение ключа ${user[key]}`);
// }

// for (const key in object) {
// тело цикла 
// }
// Math
// Метод - функция созданная внутри объекта 

// console.log(window);
// console.log(location);

// const user = {
//   name: 'Иванус',
//   age: 31,
//   agePlus: function () {
// this ссылка на этот объект в котором
// вы пишите функцию или берете значение 
//     return ++this.age
//   }
// }
// console.log(user.age);
// console.log(user.agePlus());

// двумерные объекты 
const users = {
  '1': {
    name: 'Равшанус',
    age: 17,
  },
  '2': {
    name: 'Артемиус',
    age: 21,
  }
}

let i = 3
users[`${i}`] = {
  name: 'Жамолидинус',
  age: 19,
}

for (const key in users) {
  console.log(key);
  // console.log(users[key]);
  for (const keyZ in users[key]) {
    console.log(keyZ);
    console.log(users[key][keyZ]);
  }
}
console.log(users);

// Методы массивов

// let arr = ['Иванус', 'Равшанус', 'Артемиус', 'Искандарус']

// arr.push(25, 2535, 646, 46, 3, 46, 346, 213, 46)

// let popped = arr.pop()

// console.log(arr);
// console.log(popped);

// arr.unshift('Акрамиус')
// arr.shift()
// console.log(arr);
// arr.splice(индекс начало, кол-во удаляемых элементов, 
// значение на замену удаленных элементов)

// for (const key in arr) {
//   arr[key] == 'Артемиус' ? arr.splice(key, 3, 24, 2, 35, 135) : ''
// }

// console.log(arr);

// let str = 'Петя, Вася, Равшан,lorem'
// console.log(str);
// let arrName = str.split(', ')
// split преобразовывает строки в массив по указанному символу
// console.log(arrName);

// let strName = arrName.join(' ')
// join преобразовывает массив в строки по указанному символу 
// console.log(strName);

// Методы перебора 

// forEach() - данный метод позволяет запускать функцию (для каждого) элемента массива

let cars = ['bmw', 'audi', 'mers']

// console.log(cars);
// () => {} стрелочная функция 
// callback функция которая вызывает стороннюю функцию
// forEach((elem, index, arr) => {})
// первый параметр возвращает элементы массива 
// второй параметр возвращает индекс элемента 
// третий параметр возвращает массив 

// bmw находится под ячейкой 0
// cars.forEach(elem => /*return*/ console.log(`${elem} находится под ячейкой`))
// если в стрелочной функции ваше решение помещается
// в одну строку можно {} не указывать в таком случае
// результат будет всегда делать (return данных)  
// также если у вас 1 параметр () писать не обязательно

// map 
// map() - он вызывает функцию для каждого элемента массива 
// - возвращает массив результата выполненных действий с каждым элементом  
let num = [5, 10, 15, 20, 25]
// первый параметр возвращает элементы массива 
// второй параметр возвращает индекс элемента 
// третий параметр возвращает массив 

let double = num.map(el => {
  return el * 2
})
console.log(num);
console.log(double);

let double2 = double.map(el => el * 2)
console.log(double2);

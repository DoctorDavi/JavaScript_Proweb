// Number - числовой тип данных 
// Boolean - булевый тип двоичный тип (true || false)
// String - строка '', "", ``

// alert() - выводит сообщение пользователя 
// const - переменная неизменяемого типа 
// let - локальная переменная которая при объявлении внутри замыкания будет
// являться локальной если ее писать за пределами она будет глобальной 
// var - глобальная 

// '' - строка
// 0 - число
// false - boolean
// {} - object
// [] - array
// undefined - не определено 
// null - пустота определяет будущий тип данных 
// NaN - Not a Number

// const variable = {
//   name: null,
//   age: null, 
// } 
// variable.name = 'поменяю'
// variable.age = 25
// ссылка в объекте указывается как . 
// ['значение ключа']
// console.log(variable);

// const book = {
//   title: 'Над пропастью во ржи',
//   author_name: 'Дэвид',
//   author_lastname: 'Сэлинджер',
//   create_at: '1951г',
//   short_desc: 'Роман написан от лица шестнадцатилетнего Холдена Колфилда, находящегося на лечении в клинике: он рассказывает об истории, случившейся с ним прошлой зимой, предшествовавшей его болезни. События, о которых он повествует, разворачиваются в предрождественские дни декабря 1949 года',
// }

// let full_name = ''

// for (const key in book) {
//   if (key == 'author_name' || key == 'author_lastname') {
//     full_name += ` ${book[key]}`
//     delete book[key]
//     full_name.trim()
//   }
// }
// book.full_name = full_name
// console.log(book);

// Array - Массивы - упорядоченный тип данных который нумерует 
// каждый новый добавленный элемент начинает нумеровать с (0 нуля)
// каждый номер это индекс 
// обозначается [] 

let arr = [23, 46, 2346, 23, 4, 78, 3486, 54, 79, 5679, 3, 46, 35]
// length - длину массива
// console.log(arr[7]);
// console.log(arr[10]);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[9]);
// console.log(arr[12]);
// console.log(arr[5]);
let newArr = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 23) {
    console.log(arr[i] + 77, i);
    newArr.push(arr[i] += 77)
  }
}

console.log(arr);

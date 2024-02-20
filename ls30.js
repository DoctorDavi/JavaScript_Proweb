// массивы - Array
// массив обозначается []
// массив является упорядоченным типом данных 
// который каждый элемент присваивается ключ в виде значения числа
// начинается отсчет с 0 и до конца массива 
// массив может хранить в себе неограниченное количество элементов 
// массивы могут хранить любой тип данных даже функции
// let arr = []
// console.log(arr);

// let num = [14, 2263, 3457, 3474, 55, 62, 73, 815, 964, 1035]
// console.log(num);
// console.log(num[5]);
// console.log(num[1]);
// console.log(num[10] + 5);
// console.log(num.length);
// длина считает с 1 и выводит всю длину массива 
// let str = 'hello world!'
// console.log(str[6]);
// console.log(str);
// console.log(str.length);
// let total = str.split('').reverse().join('');
// console.log(total);
// for (let i = 0; i < num.length; i++) {
//   console.log(i);
//   total += num[i];
// }
// console.log(total);

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]); 
//   total += str[i] 
// }
// console.log(total);

let names = [
  {
    name: 'Гоща',
    age: 23,
  },
  {
    name: 'петя',
    age: 42,
  },
  {
    name: 'вася',
    age: 48,
  },
  {
    name: 'жорик',
    age: 28,
  }
]

for (const key in names) {
  console.log(names[key]);
  for (const keyY in names[key]) {
    console.log(keyY == 'name' ? 
    `Пользователь ${names[key][keyY]}` 
    : `Возраст пользователя ${names[key][keyY]}`);
  }
}

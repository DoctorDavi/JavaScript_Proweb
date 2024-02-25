let i = 1

const heroes = [
  {
    id: i++,
    name: 'Antony', 
    lastname: 'Stark', 
    age: 50,
    isAlive: false, 
  },
  {
    id: i++,
    name: 'Peter', 
    lastname: 'Parker', 
    age: 19,
    isAlive: true, 
  },
  {
    id: i++,
    name: 'Thor', 
    lastname: 'Odinson', 
    age: 1500,
    isAlive: true, 
  },
  {
    id: i++,
    name: 'Steve', 
    lastname: 'Rodgers', 
    age: 150,
    isAlive: false, 
  },
]

let newInfo = heroes.map(hero => {
  return {
    fullName: hero.name + ' ' + hero.lastname,
    id: `ваш id - ${hero.id}`,
    isAlive: hero.isAlive ? `этот герой true он не сдох` : `этот герой сдох он не true`,
  }
})

// console.log(newInfo);

// фильтрация массивов 
// filter(() => условие ) возвращает массив из всех подходящих по условию элементов 
let alive = heroes.filter(item => item.isAlive)
let dead = heroes.filter(item => !item.isAlive)

let youth = heroes.filter(hero => hero.age >= 18 && hero.age < 60)
let ancient = heroes.filter(item => item.age >= 60)
console.log(ancient);

// sort() - сортирует массив по указанным вычисленным значениям

let nums = [235, 2, 35, 2, 5, 25] // массив 

// nums.sort((prev, next) => {
//   console.log(prev, next, next - prev);
//   return next - prev
// }) 
// console.log(nums);

newInfo.sort((a, b) => a.fullName.toLowerCase < b.fullName.toLowerCase ? -1 : 1)
console.log(newInfo);

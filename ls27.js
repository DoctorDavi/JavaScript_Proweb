// угадай загаданное число 
// mysteryNumber = ???
// написать условие 
// если пользователь вводит число меньше загаданного 
// ему выводится сообщение число больше 
// если он вводит меньше то ему 
// выводится что число больше
// если он вводит число которое равно загаданному 
// то ему выводится что ты угадал !

// условие для ввода число не должно быть меньше 0 и больше 100 и должно быть числом 

// написать цикл чтобы он выполнялся пока пользователь не введет загаданное число если он вводит загаданное число то он угадал

let mysteryNumber = 20;
for (var i = 5; i > 0; i--) {
  alert(`у вас осталось ${i} попыток`);
  do {
    var userNumber = +prompt('Введите число, стараясь угадать заданное число.');
  } while (isNaN(userNumber) || userNumber < 0 || userNumber > 100);
  if (userNumber < mysteryNumber) {
    alert('Загаданное число больше');
  } else if (userNumber > mysteryNumber) {
    alert('Загаданное число меньше');
  } else if (userNumber == mysteryNumber) {
    alert('Вы угадали число!');
    break;
  }
}
if (i == 0) {
  alert('ты проиграл');
}

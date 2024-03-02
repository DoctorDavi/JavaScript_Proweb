let arr = []

for (let i = 0; i < Infinity; i++) {
  var command = prompt('введите команду')
  command = command.split(', ')
  // command = ['add', 'иван']
  // command = ['del', 'иван']
  // command = ['stop']
  if (command[0] == 'add') {
    arr.push(command[1])    
    console.log();
  }
}

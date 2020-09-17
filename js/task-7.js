// reduce

// Получи общую сумму баланса(сумму значений свойства balance)
// всех пользователей.

// Используй деструктурирующее присваивание
// для параметра функции { balance }
// без пробелов и переносов на новую строку

// Write code under this line

const calculateTotalBalance = array =>
  array.reduce((total, { balance }) => total + balance, 0);

// В данной задаче я воспользовался методом reduce,
// Аккомулятором служит total,
// так же в парметрах указал деструктуризирующее свойство balance.

// console.log(calculateTotalBalance(users));

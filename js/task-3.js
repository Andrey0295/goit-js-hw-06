// filter, map
// Получи массив имен пользователей(значение свойства name)
// по полу(значение свойства gender).

// Используй деструктурирующее присваивание
// для параметра функции({ name }) без пробелов
// и переносов на новую строку.

// 1.Отфильтровать по полу.
// 2.Получить массив имен.

// Write code under this line

// const users = [
//   { name: 'Mango', job: 'waiter', gender: 'male' },

//   { name: 'Kiwi', job: 'teacher', gender: 'male' },

//   { name: 'Poly', job: 'dentist', gender: 'female' },
// ];
// console.log(users);

// const getName = (array, genders) =>
//   array.filter(({ gender }) => gender === genders).map(({ name }) => name);

// console.log(getName(users, 'male'));

const getUsersWithGender = (array, genders) =>
  array.filter(({ gender }) => gender === genders).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */

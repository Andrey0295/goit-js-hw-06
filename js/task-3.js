// filter, map
// Получи массив имен пользователей(значение свойства name)
// по полу(значение свойства gender).

// Используй деструктурирующее присваивание
// для параметра функции({ name }) без пробелов
// и переносов на новую строку.

// 1.Отфильтровать по полу.
// 2.Получить массив имен.

const getUsersWithGender = (array, genders) =>
  array.filter(({ gender }) => gender === genders).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male'));

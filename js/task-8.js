// filter, includes и map

// Получи массив имен всех пользователей
// у которых есть друг с заданным именем.

// Используй деструктурирующее присваивание
// для параметра функции { friends } и({ name })
// без пробелов и переносов на новую строку

// 1.Отфильтровать массив пользователей, используя includes
// 2.Получить имена этих пользователей в массиве.

// Write code under this line
const getUsersWithFriend = (array, friendName) =>
  array
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

// -В Данной задаче в параметрах функции я получил массив объектов и имя друга пользователя.
// -Сделал фильтр в котором получил наличиe имени друга в свойстве объекта friends.
// - Далее к результату фильтра добавил метод map из которого получил имена отфильтрованных друзей.

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

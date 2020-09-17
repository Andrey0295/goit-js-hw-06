// sort и map

// Получи массив имен(поле name) людей,
//     отсортированных в зависимости от количества их друзей(поле friends)

// Избегаем мутации исходного массива: т.к.метод sort изменяет(мутирует) исходный массив,
//     то следует сделать копию массива и сортировать уже копию, а не исходный массив.

// Write code under this line
const users = [
  { name: 'Mango', friends: ['kivi', 'Poly', 'Casie'] },
  { name: 'Casie', friends: ['kivi', 'poly', 'Orange', 'Melon'] },
  { name: 'John', friends: ['kivi', 'poly'] },
  { name: 'Alex', friends: ['kivi'] },
  { name: 'Kiwi', friends: ['kivi', 'Mango', 'Peter', 'Kristin', 'poly'] },
  { name: 'Poly', friends: ['kivi'] },
];
console.table(users);

const getNamesSortedByFriendsCount = array =>
  [...array]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));

// -В этой задаче мне нужно было получить отсортированный по количеству друзей массив,
//  - Я создал копию массива таккак сорт вносит изменения в оригинал...user
// -в методе сорт я применил a - b с методои length, так как количество друзей указанно не в цифрах.
// -далее методом map я получил имена отсортированных пользователей

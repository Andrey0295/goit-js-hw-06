// reduce, filter, sort

// Получи массив всех умений всех пользователей(поле skills),
//     при этом не должно быть повторяющихся умений
// и они должны быть отсортированы в алфавитном порядке.

const users = [
  { name: 'Mango', job: 'waiter', skills: ['бегать', 'прыгать', 'думать'] },

  { name: 'Kiwi', job: 'teacher', skills: ['бегать'] },

  { name: 'Poly', job: 'dentist', skills: ['думать', 'прыгать'] },
];

// 1.REDUCE ПОЛУЧАЕТ МАССИВ ВСЕХ УМЕНИЙ (SKILLS).

const getSkills = array =>
  array
    .reduce((acc, arr) => [...acc, ...arr.skills], [])

    // 2.SORT СРАЗУ ЖЕ СОРТИРУЕТ ЭТИ УМЕНИЯ ПО АЛФАВИТУ.

    .sort()

    // 3.ОТФИЛЬТРОВАТЬ МАССИВ БЕЗ ПОВТОРЕНИЙ (ОСТАВИТЬ УНИКАЛЬНЫЕ ЗНАЧЕНИЯ)

    .filter((value, index, array) => array.indexOf(value) === index);

console.log(getSkills(users));

// 3.ОТФИЛЬТРОВАТЬ МАССИВ БЕЗ ПОВТОРЕНИЙ (ОСТАВИТЬ УНИКАЛЬНЫЕ ЗНАЧЕНИЯ)

// const skillsArray = [
//   'бегать',
//   'бегать',
//   'думать',
//   'думать',
//   'прыгать',
//   'прыгать',
// ];

// const getNoRepeat = array =>
//   array.filter((value, index) => array.indexOf(value) === index);
// console.log(getNoRepeat(skillsArray));

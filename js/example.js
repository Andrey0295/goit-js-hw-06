// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Mango', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const getName = players.filter((player, name) => player.n);
// console.log(getName);
// Деструктуризация и деструктивное присвоение!!!
const obj = {
  a: 1,
  b: 3,
  c: 5,
};
console.log(obj);
console.log(obj.b);

function getNum(obj) {
  return obj.c;
}
console.log(getNum(obj));

function getNumA({ a }) {
  return a;
}
console.log(getNumA(obj));

const destruction = ({ a } = {}) => a + 3;

console.log(destruction(obj));

// 1.Отфильтровать массив по полу
// 2.получить имена юзеров в отдельном массиве.
const users = [
  { name: 'Mango', job: 'waiter', gender: 'male' },

  { name: 'Kiwi', job: 'teacher', gender: 'male' },

  { name: 'Poly', job: 'dentist', gender: 'female' },
];

const getName = (array, genders) =>
  array.filter(({ gender }) => gender === genders).map(({ name }) => name);

console.log(getName(users, 'male'));

// filter, map и создание анонимных объектов
// Получи массив из объектов,
//  которые состоят только из свойств name и email тех пользователей,
// которые попадают в возрастную категорию от min до max лет(значение свойства age).
const users = [
  {
    name: 'Mango',
    age: 20,
    job: 'waiter',
    gender: 'male',
    email: 'mnago@example',
  },

  { name: 'Kiwi', age: 30, job: 'teacher', gender: 'male' },

  { name: 'Poly', age: 40, job: 'dentist', gender: 'female' },
];
console.log(users);

const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age > min && age < max)
    .map(({ name, email }) => ({} = { name, email }));
console.log(getUsersWithAge(users, 10, 35));

// find
// Получи объект пользователя
// (не массив) по уникальному значению свойства email.

const getUserWithEmail = (array, mail) =>
  array.find(({ email }) => mail === email);

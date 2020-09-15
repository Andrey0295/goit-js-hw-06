// Получи массив только неактивных пользователей
//     (отфильтруй по значению свойства isActive)

const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

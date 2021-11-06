/*
  find
  Не изменяет оригинальный массив.
  Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
  Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.
  Не использовать find для определения наличия элемента в массиве!
*/

/*
  findIndex
  Не изменяет оригинальный массив.
  Возвращает индекс первого элемента удовлетворяющего условию, то есть когда коллбек возвращает true.
  Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает -1.
*/

////////////////////////////////////////////////////////////

/*
  Найти первое число, кратное пяти, и его индекс
  Решаем с помощью for сначала
*/

// const numbers = [1, 10, 3, 25, 5, 60, 1000, 7, 12, 9];

// // let number = null;
// // let numberIdx = null;

// // for (let i = 0; i < numbers.length; i += 1) {
// //   if (numbers[i] % 5 === 0) {
// //     number = numbers[i];
// //     numberIdx = i;
// //     break;
// //   }
// // }

// const checkMultipleOf5 = num => num % 5 === 0;

// const number = numbers.find(checkMultipleOf5);
// const numberIdx = numbers.findIndex(checkMultipleOf5);

// console.log('number', number);
// console.log('numberIdx', numberIdx);

///////////////////////////////////////////////////////////

// import users from './users.js';

// // Найти пользователя по id

// const id = '150b00fb-dd82-427d-9faf-2879ea87c695';

// const userToFind = users.find(user => user.id === id);

// // console.log(userToFind); // Blackburn Dotson

// // Найти активного пользователя, с балансом больше 4000

// const activeUser = users.find(
//   ({ isActive, balance }) => isActive && balance > 4000,
// );

// console.log(activeUser); // Carey Barr

/////////////////////////////////////////////////////////////////////////

// Получить массив только тех изобретателей, которые находятся перед Elma Head

// console.log(newArr); // 3

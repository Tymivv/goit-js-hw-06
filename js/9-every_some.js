/*
  every (&&)
  Не изменяет оригинальный массив.
  Возвращает true, если все элементы массива удовлетворяют условию.
  Возвращает false, если хотябы один элемент массива не удовлетворяет условию.
  Перебор массива прекращается, если коллбек возвращает false.
*/

/*
  some (||)
  Не изменяет оригинальный массив.
  Возвращает true, если хотя бы один элемент массива удовлетворяет условию.
  Возвращает false, если ни один элемент массива не удовлетворяет условию.
  Перебор массива прекращается, если коллбек возвращает true.
  Можно использовать для определения наличия элемента в массиве.
*/

////////////////////////////////////////////////////////////////////

/*
  Дан массив с числами. Проверьте, все ли элементы в массиве больше нуля.
  Решаем с помощью for of сначала
*/

// const positiveNums = [4, 6, 7, 3, 9];
// const positiveAndNegativeNums = [4, -6, -7, -3, 9];

// const isAllPositive = positiveAndNegativeNums.every(num => num > 0);
// const isAllPositive2 = positiveNums.every(num => num > 0);

// // console.log(isAllPositive);
// // console.log(isAllPositive2);

// // let isAllPositive = true;

// // for (const num of positiveAndNegativeNums) {
// //   if (num <= 0) {
// //     isAllPositive = false;
// //     break;
// //   }
// // }

// // console.log(isAllPositive);

// // Дан массив с числами. Проверьте, есть ли в нем отрицательные элементы.

// // let hasNegativeNums = false;

// // for (const num of positiveAndNegativeNums) {
// //   if (num < 0) {
// //     hasNegativeNums = true;
// //     break;
// //   }
// // }

// const hasNegativeNums = positiveAndNegativeNums.some(num => num < 0);
// const hasNegativeNums2 = positiveNums.some(num => num < 0);

// console.log(hasNegativeNums);
// console.log(hasNegativeNums2);

/////////////////////////////////////////////////////////////////////////

/*
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/

// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

///////////////////////////////////////////////////////////

// import users from './users.js';

// // Проверить, есть ли в списке пользователи с балансом меньше 2000 (1000)

// // const areWithSmallBalance = users.some(user => user.balance < 1000);

// // console.log(areWithSmallBalance);

// //////////////////

// // Проверить, все ли пользователи в списке имеют друзей (2 друга)

// // const allHaveFriends = users.every(user => user.friends.length > 0);

// // console.log(allHaveFriends);

// /////////////////////////////////////////

// // Определить, равны ли два массива по значению

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// // const areArraysEqual = !arr1.some((item, index) => item !== arr2[index]);
// const areArraysEqual = arr1.every((item, index) => item === arr2[index]);

// console.log(areArraysEqual);

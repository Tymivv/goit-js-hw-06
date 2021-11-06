/*
  Не изменяет оригинальный массив.
  То, что возвращается из коллбек-функции, записывается в новый массив.
  Сам map возвращает новый массив такой же длины.
*/

////////////////////////////////////////////////////////

/*
  Аналог map
  Напишите функцию myMap(array, callback), которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. 
  Функция myMap должна вернуть новый массив, элементами которого будут результаты вызова коллбека.
  Решаем с помощью for of.
*/

// const numbers = [64, 49, 36, 25, 16];

// const dividedNumbers = myMap(numbers, elem => elem / 2);
// console.log(dividedNumbers); // [32, 24.5, 18, 12.5, 8]

// const isEvenNumbers = myMap(numbers, elem => {
//   return elem % 2 === 0 ? 'even' : 'odd';
// });
// console.log(isEvenNumbers); // ['even', 'odd', 'even', 'odd', 'even']

// const words = ['Happy', 'New', 'Year'];
// const exclamWords = myMap(words, str => `${str}!`);
// console.log(exclamWords); // ['Happy!', 'New!', 'Year!']

// const floats = [1.5, 2.1, 16.4, 9.7, 11.3];

// const biggerNums = myMap(floats, element => Math.ceil(element));
// console.log(biggerNums); // [2, 3, 17, 10, 12]
// const smallerNums = myMap(floats, element => Math.floor(element));
// console.log(smallerNums); // [1, 2, 16, 9, 11]

////////////////////////////////////////////
/*
  Создать массив с числами, уменьшенными на 30%
  Решаем с помощью for of сначала
*/

// const prices = [500, 800, 100, 400, 1000];

// // const lowerPrices = [];

// // for (const price of prices) {
// //   lowerPrices.push(price * 0.7);
// // }

// // const lowerPrices = prices.map(price => {
// //   return price * 0.7;
// // });

// const lowerPrices = prices.map(price => price * 0.7);

// console.log(lowerPrices); // [350, 560, 70, 280, 700]

////////////////////////////////////////////////////////////

import users from './users.js';

// // Получить массив имен пользователей

// const names = users.map(user => user.name);

// console.log(users);
// console.log(names);
// // ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

//////////////////////////////////////////////////////////////////////////

/*
  Напишите функцию getPropValues(arr, prop), принимающую
  параметры arr - массив объектов, и prop - имя ключа в объекте.
  Функция должна возвращать массив всех значений этого ключа из объектов arr.
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// Вызовы функции для проверки

// const getPropValues = (arr, prop) => {
//   const newArr = arr.map(elem => {
//     return elem[prop];
//   });
//   return newArr;
// };

// const getPropValues = (arr, prop) => arr.map(elem => elem[prop]);

// console.log(getPropValues(guests, 'name')); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

// console.log(getPropValues(guests, 'age')); // [20, 18, 30, 45]

// console.log(getPropValues(guests, 'isActive')); // [true, false, true, false]

////////////////////////////////////////////////////////////

// import inventors from './inventors.js';

// /*
//   Получить массив с датами жизни изобретателей, в виде вложенных массивов:
//   [[1879, 1955], [1427, 1500], ...]
// */

// const yearsOfLife = inventors.map(({ born, passed }) => [born, passed]);

// console.log(inventors);
// console.log(yearsOfLife);

////////////////////////////////////////////////////////////////////////

/*
  Функция increaseSmallBy принимает два аргумента - число и массив.
  Возвращает массив, в котором к каждому элементу, меньшему чем число, добавлено это число.
*/

// function increaseSmallBy(num, arr) { }

// console.log(increaseSmallBy(2, [1, 2, 3, 4, 5])); // [3, 2, 3, 4, 5]
// console.log(increaseSmallBy(3, [1, 2, 3, 4, 5])); // [4, 5, 3, 4, 5]
// console.log( increaseSmallBy(4, [1, 2, 3, 4, 5]) ); // [5, 6, 7, 4, 5]

/*
  Не изменяет оригинальный массив.
  Возвращает новый массив длиной меньше или равной оригинальному.
  Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
  Если коллбек вернул true элемент добавляется в возвращаемый массив.
  Если коллбек вернул false элемент не добавляется в возвращаемый массив.
  Если ни один элемент не удовлетворил условию, возвращает пустой массив.
*/

//////////////////////////////////////////////////////////

/*
 Аналог filter
 Напишите функцию myFilter(array, callback), которая первым параметром принимает массив, а вторым - функцию-тест, которая применится к каждому элементу массива. 
 Функция фильтр должна вернуть новый массив на основании переданного. Если колбек-тест вернет true с текущим элементом, то он должен попасть в новый массив, а если false - то нет.
 Решаем с помощью for of.
*/

// function myFilter(array, callbackTest) { }

// const numbers = [64, 49, 36, 25, 16];

// const isEven = element => element % 2 === 0;
// const evenArray = myFilter(numbers, isEven);
// console.log(evenArray); // [64, 36, 16];

// console.log(myFilter(numbers, element => element < 30)); // [64, 49, 36];

// console.log(myFilter(['Happy', 'New', 'Year'], str => str.includes('e'))); // ['New', 'Year'']

//////////////////////////////////////////////////////////

// Дан массив с числами. Посчитайте количество отрицательных чисел в нем.

// const numbers = [4, -6, 7, 3, -9, 1];

// // const negatives = [];

// // for (const num of numbers) {
// //   if (num < 0) {
// //     negatives.push(num);
// //   }
// // }

// // const negatives = numbers.filter(num => {
// //   return num < 0;
// // });

// const negatives = numbers.filter(num => num < 0);

// console.log(negatives.length);
// console.log(negatives);
// console.log(numbers);

///////////////////////////////////////////////////////////

/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.
  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// const getGuestsOlderThan = (guests, age) => {
//   return guests.filter(guest => guest.age > age);
// };

// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
// //
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
// //
// console.log(getGuestsOlderThan(guests, 55)); // []

///////////////////////////////////////////////////////////

/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.
  Функция должна возвращать массив объектов активных гостей.
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// const activeGuests = guests.filter(guest => guest.isActive);
// console.log(activeGuests); // массив из 2-х объектов Mango и Ajax

///////////////////////////////////////////////////////////

// import users from './users.js';

// // Получить массив пользователей, у которых больше двух друзей

// const friendlyUsers = users.filter(({ friends }) => friends.length > 2);

// console.log(friendlyUsers); // 2

///////////////////////////////////////////////////////////

/*
  Дан массив, в нем могут быть обычные элементы и подмассивы,
  например [1, 2, [3, 4], 5, [6, 7]].
  Оставьте в нем только подмассивы (Array.isArray())
*/

// const data = [1, 2, [3, 4], 5, [6, 7]];

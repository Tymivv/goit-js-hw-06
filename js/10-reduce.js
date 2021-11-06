/*
  Не изменяет оригинальный массив.
  Возвращает что угодно.
  Делает что угодно.
*/

// array.reduce(
//   сallback(previousAccValue, currentItem, [index, array]),
//   [initialAccValue]
// );

///////////////////////////////////////////////////////////

/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
  Решаем с помощью for of сначала
*/

// const summAllNumbers = (...numbers) => {
//   const totalSum = numbers.reduce((acc, num, idx) => {
//     console.log('Iteration', idx + 1);
//     console.log('acc', acc);
//     console.log('num', num);
//     console.log('----------------');

//     acc = acc + num;
//     return acc;
//   }, 0);
//   return totalSum;
// };

// const summAllNumbers = (...numbers) => {
//   const totalSum = numbers.reduce((acc, num) => acc + num, 0);
//   return totalSum;
// };

// console.log(summAllNumbers(5, 3, 1)); // 9
// console.log(summAllNumbers(1, 2, 3, 4)); // 10
// console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15

///////////////////////////////////////////////////////////

// Напишите функцию getMax(numbers), которая принимает массив положительных чисел и возвращает самое большое число

// const numbers = [1, 2, 20, 1, 3];

// function getMax(array) {
//   return array.reduce((maxNum, item) => {
//     return item > maxNum ? item : maxNum;
//   }, 0);
// }

// // function getMax(array) {
// //   return array.reduce((maxNum, item) => {
// //     if (item > maxNum) {
// //       return item;
// //     }
// //     return maxNum;
// //   }, 0);
// // }

// console.table(getMax(numbers)); // 20

///////////////////////////////////////////////////////////

// Посчитать сколько всего  нужно сделать за неделю

// const hoursWorkedPerWeek = [
//   { day: 'Mon', count: 9 },
//   { day: 'Tue', count: 10 },
//   { day: 'Wen', count: 11 },
//   { day: 'Thu', count: 5 },
//   { day: 'Fri', count: 12 },
// ];

// const hoursCount = hoursWorkedPerWeek.reduce(
//   (sum, { count }) => sum + count,
//   0,
// );

// console.log(hoursCount); // 47

///////////////////////////////////////////////////////////

// Напишите функцию leaveUnique(arr), которая возвращает массив, содержащий только уникальные элементы arr

// const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

// const leaveUnique = numbers =>
//   numbers.reduce((uniqueNumbers, num) => {
//     return uniqueNumbers.includes(num)
//       ? uniqueNumbers
//       : [...uniqueNumbers, num];
//   }, []);

// // const leaveUnique = array =>
// //   array.reduce((uniqueNumbers, num) => {
// //     if (!uniqueNumbers.includes(num)) {
// //       uniqueNumbers.push(num);
// //     }
// //     return uniqueNumbers;
// //   }, []);

// console.log(leaveUnique(notUniqueNumbers)); // [1, 2, 3, 4, 5, 7]

////////////////////////////////////////////////////////////

// Напишите функцию, которая разделяет массив на части заданного размера.

// const chunk = (array, size) => array.reduce((acc, num) => {}, [[]]);

// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
// console.log(chunk(data, 4)); // [[1, 2, 3, 4], [5, 6, 7]]
// console.log(chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7]]

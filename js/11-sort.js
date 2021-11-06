/*
  Сортирует и изменяет исходный массив.
  Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
  По умолчанию сортирует по возрастанию.
  Сортировка происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.
*/

////////////////////////////////////////////////////////////

/*
  Сортировка примитивов
  Выполнить сортировку массива цен по убыванию и возрастанию.
  Cортировать по умолчанию и используя callback.
*/

// const smallNumbers = [7, 1, 9, 3, 2, 8, 6];
// const numbers = [2, 14, 1, 37, 263, 8, 111];

// console.log('numbers', numbers);

// по возрастанию

// 1)
// smallNumbers.sort();
// numbers.sort();

// 2)
// numbers.sort((a, b) => a - b);

// 3)
// numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   return -1;
// });

// по убыванию

// 1)
// numbers.sort((a, b) => b - a);

// 2)
// numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   return 1;
// });

// console.log('smallNumbers', smallNumbers);
// console.log('numbers', numbers);

// console.log("---------------");

// const smallLetters = ['a', 'y', 'x', 'b', 'c', 'z'];
// const letters = ['a', 'Y', 'x', 'B', 'c', 'z'];
// console.log('~ letters', letters);
// // console.log('smallLetters', smallLetters);

// // smallLetters.sort();
// // letters.sort();
// // letters.sort((a, b) => a.localeCompare(b)); // по возрастанию
// letters.sort((a, b) => b.localeCompare(a)); // по убыванию

// // console.log('smallLetters', smallLetters);
// console.log('letters', letters);

////////////////////////////////////////////////////////////

/*
  Сортировка сложных типов
  Выполнить сортировку массива объектов, не изменяя исходный массив:
  - по возрастанию и убыванию значения свойства price.
  - по имени в алфавитном и обратном алфавитном порядке.
*/

// const items = [
//   { name: 'Samsung', price: 1500 },
//   { name: 'LG', price: 900 },
//   { name: 'Samsung', price: 100 },
//   { name: 'LG', price: 80 },
//   { name: 'Asus', price: 2000 },
//   { name: 'Samsung', price: 2000 },
//   { name: 'LG', price: 1900 },
//   { name: 'Dell', price: 1200 },
//   { name: 'LG', price: 800 },
//   { name: 'BenQ', price: 900 },
// ];

// // const itemsByPrice = [...items].sort((a, b) => a.price - b.price);
// // const itemsByPrice = [...items].sort((a, b) => b.price - a.price);

// // console.log('~ itemsByPrice', itemsByPrice);

// // const itemsByName = [...items].sort((a, b) => a.name.localeCompare(b.name));
// const itemsByName = [...items]
//   .sort((a, b) => b.price - a.price)
//   .sort((a, b) => a.name.localeCompare(b.name));

// console.log('~ itemsByName', itemsByName);

// console.log('items', items);

///////////////////////////////////////////////////////////

// import inventors from './inventors.js';

// Отсортировать изобретателей по дате рождения.

// Отсортировать изобретателей по фамилии в алфавитном порядке.

///////////////////////////////////////////////////////////

// Перемешивание
// Напишите функцию shuffle, которая принимает массив и возвращает новый, с теми же элементами, но в случайном порядке.

// const numbers = [1, 2, 3, 4, 5, 6];

// function randomCompare() {
//   return Math.random() - 0.5;
//   // if Math.random() < 0.5 отрицательное,
//   // иначе положительное
// }

// console.log(shuffle(numbers));
// console.log(shuffle(numbers));
// console.log(shuffle(numbers));
// console.log(shuffle(numbers));
// console.log(shuffle(numbers));

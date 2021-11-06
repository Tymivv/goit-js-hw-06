/*
  Функциональные методы массива можно группировать в цепочки.
  Каждый следующий метод будет выполняться на результате работы предыдущего.
*/

///////////////////////////////////////////////////////////

/*
  Дан массив с числами.
  Получите сумму квадратов его элементов, но только тех квадратов, которые больше 40.
  * цепочкой и на одном reduce
*/

// let arr = [5, 6, 7, 8, 9];

// const sum = arr
//   .map(num => num * num) // [25, 36, 49, 64, 81]
//   .filter(square => square > 40) // [49, 64, 81]
//   .reduce((total, number) => total + number); // 194

// const sum = arr
//   .map(num => num * num) // [25, 36, 49, 64, 81]
//   .filter((square, _, array) => {
//     // console.log('init array', arr);
//     // console.log('array', array);
//     return square > 40;
//   }) // [49, 64, 81]
//   .reduce((total, number, _, array) => {
//     console.log('init array', arr);
//     console.log('array', array);
//     return total + number;
//   });

// const sum = arr.reduce((total, item) => {
//   const square = item * item;
//   return square > 40 ? total + square : total;
// }, 0);

// console.log(sum); // 194

//////////////////////////////////////////////////////////////////////////

// import inventors from './inventors.js';

// // Получить отсортированные по алфавиту имена изобретателей, которые родились 18-м веке или раньше

// const names = inventors
//   .filter(inventor => inventor.born < 1800) // 4 objects
//   .map(({ name }) => name) // ['Isaac', 'Galileo', 'Johannes', 'Nicolaus']
//   .sort((a, b) => a.localeCompare(b)); // [Galileo', 'Isaac', 'Johannes', 'Nicolaus'];

// console.log('~ names', names);
// // [Galileo', 'Isaac', 'Johannes', 'Nicolaus'];

//////////////////////////////////////////////////////////////////////////

/*
  Написать функцию getUnderageUsers(users), которая получает массив пользователей и возвращает отсортированный по возрасту массив с пользователями, которым меньше 18 лет. 
  При этом в поле isActive должно быть значение false, даже если до этого было true.
*/

// import users from './users.js';

// const getUnderageUsers = users =>
//   users
//     .filter(user => user.age < 18) // 3 users
//     .map(underageUser => ({
//       ...underageUser,
//       isActive: false,
//     })) // 3 users with  isActive: false
//     .sort((a, b) => a.age - b.age);

// Wrong
// .map(underageUser => {
//   underageUser.isActive = false;
//   return underageUser;
// });

// const underageUsers = getUnderageUsers(users);
// console.log('~ underageUsers', underageUsers);

///////////////////////////////////////////////////////////

/*
  Написать функцию increaseBalance(users, id, value), которая получает массив пользователей, id пользователя и сумму пополнения баланса. Функция возвращает массив, в котором у переданного юзера увеличился баланс на переданную сумму.
  Также всем объектам нужно добавить новое поле: lastIncreased. У всех false, а у юзера по id - true.
*/

// const userId = '7a3cbd18-57a1-4534-8e12-1caad921bda1';
// const updatedUsers = increaseBalance(users, userId, 550);
// console.log('~ updatedUsers', updatedUsers);
// [1] {name: 'Sharlene Bush', balance: 4000}

///////////////////////////////////////////////////////////

/*
  Написать функцию getUpgradedUsers(users, skill), которая получает массив пользователей и новый скил, который нужно добавить в поле skills.
  Функция возвращает массив пользователей, у которых этого скила не было до этого.
  Перед тем как добавить новый скил юзеру, нужно проверить, сколько скилов у него было до этого. Если 5 и больше, то все предыдущие скилы должны замениться на новый, а если меньше, то новый скил  должен добавиться к предыдущим.
*/

// const upgradedUsers = getUpgradedUsers(users, 'veniam'); // 5 юзеров
// const upgradedUsers = getUpgradedUsers(users, 'ipsum'); // 4 юзера

// console.log('~ upgradedUsers', upgradedUsers);

/////////////////////////////////////////////////////////////////////////

// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: ['VSCode', 'Loops', 'Functions', 'Classes', 'DOM', 'Git', 'GitHub'],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: ['VSCode', 'NPM', 'Bundlers', 'Promises', 'AJAX', 'Git', 'GitHub'],
//   },
// ];

/*
  Получить отсортированный в алфавитном порядке массив всех уникальных топиков.
  Оставить уникальные двумя способами: filter / new Set
*/

// const uniqueTopics = courses
//   .flatMap(course => course.topics)
//   .filter((topic, index, array) => array.indexOf(topic) === index);

// const allTopics = courses.flatMap(course => course.topics);

// const uniqueTopics = [...new Set(allTopics)];

// console.log('allTopics', allTopics); // 25
// console.log('uniqueTopics', uniqueTopics); // 15



// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];


// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((course, index, array) => course.name);
// };

// console.log(getNamesSortedByFriendCount(users));


// const sortByName = users => {
//   const name1 = users.map(user => user.name);

//   console.log(name1);
//   return [...name1].sort((firstStudent, secondStudent) =>
//     firstStudent.localeCompare(secondStudent),
//   );
// };
//  console.log(sortByName(users));


// const sortByDescendingFriendCount = users => {
//   return [...users].sort(
//     (firstStudent, secondStudent) =>
//       secondStudent.friends.length - firstStudent.friends.length,
//   );
// };





// const getTotalFriendCount = users =>
//   users.reduce((allFriends, user) => {
//     allFriends.push(...user.friends);

//     return allFriends;
//   }, []);
// const a = getTotalFriendCount(users).length;
// console.log(a);

// const getTotalFriendCount = users => {
//   return users.reduce((allFriends, user) => {
//     allFriends += user.friends.length;
//     return allFriends; 
//   }, 0);
// };

// const a = getTotalFriendCount(users);
//  console.log(a);



//////////////////

// Создать объект stats, полями которого были бы имена предметов, а значениями - количество предметов, встречающихся в массиве

// console.log(stats);

// {
//  AJAX: 1,
//  Bundlers: 1,
//  CSS: 2,
//   ...
// }

/////////////////////////////////////////////////////////////////////////

// Напиши функцию gooseFilter, которая принимает массив имен птиц и возвращает тот же массив только без гусей, имена которых указаны в массиве внутри функции

// function gooseFilter(birds) {
//   const geese = [
//     'African',
//     'Roman Tufted',
//     'Toulouse',
//     'Pilgrim',
//     'Steinbacher',
//   ];
// }

// console.log(
//   gooseFilter([
//     'Mallard',
//     'Hook Bill',
//     'African',
//     'Crested',
//     'Pilgrim',
//     'Toulouse',
//     'Blue Swedish',
//   ]),
// ); // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// console.log(
//   gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']),
// ); // ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]

//////////////////////////////////////////////////////////////////////////

/*
  В теннисном клубе есть два типа членства - Senior и Open.
  Нужно написать функцию, которая будет получать массив с данными потенциальных новых членов клуба.
  Возвращать нужно массив, в котором будет по каждому человеку определен тип членства, на который он может претендовать.
  Тип "Senior", получают люди, которым должно быть как минимум 55 лет и уровень владения игрой больше чем 7 баллов. Остальные - "Open"
  Входящий массив состоит из массивов с двумя показателями - первый это возраст, второй - уровень игры.
  Например:
  [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
  Результат должен быть таким:
  ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ]),
// ); // ['Open', 'Senior', 'Open', 'Senior']

// console.log(
//   openOrSenior([
//     [3, 12],
//     [55, 1],
//     [91, -2],
//     [54, 23],
//   ]),
// ); // ['Open', 'Open', 'Open', 'Open']
// console.log(
//   openOrSenior([
//     [59, 12],
//     [55, -1],
//     [12, -2],
//     [12, 12],
//   ]),
// ); // ['Senior', 'Open', 'Open', 'Open']

/////////////////////////////////////////////////////////////

// Напишите функцию, которая разделяет массив на части заданного размера.

// const chunk = (array, size) => array.reduce((acc, num) => {}, [[]]);

// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
// console.log(chunk(data, 4)); // [[1, 2, 3, 4], [5, 6, 7]]
// console.log(chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7]]

///////////////////////////////////////////////////////////

// Получить массив всех элемнтов матрицы, которые больше 16, отсортированных по возрастанию

// let superArr = [
//   [1, 5, 58, 11],
//   [54, [15, [1], 6], 17],
//   [2, [65, 47], 89],
// ];

///////////////////////////////////////////////////////////

/*
  Напиши функцию, которая принимает любое положительное целое число и возвращает его же только с цифрами в убывающем порядке
  По сути переставляет цифры так, чтобы получить максимальное число из них
*/

// const descendingOrder = number => {};

// console.log(descendingOrder(42145)); // 54421
// console.log(descendingOrder(145263)); // 654321
// console.log(descendingOrder(123456789)); // 987654321

///////////////////////////////////////////////////////////

/*
  Функция получает строку с числами, разделенными пробелами.
  Должна вернуть строку с двумя числами - самым большим и самым маленьким из полученных.
*/

// const highAndLow = numbersStr => {};

// console.log(highAndLow('1 2 3 4 5')); // "5 1"
// console.log(highAndLow('1 2 -3 4 5')); // "5 -3"
// console.log(highAndLow('1 9 3 4 -5')); // "9 -5"
// console.log(highAndLow('4 29 4 0 -214 542 -64 1 6 -6')); // "542 -214"


// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(
//   (course, index, array) => course.rating > MIN_BOOK_RATING,
// );
//   console.log(names)
//   // .map((course, index, array) => course.author)
//   //   console.log(names)
//   // .sort((a, b) => a.localeCompare(b));

//   // console.log(names);
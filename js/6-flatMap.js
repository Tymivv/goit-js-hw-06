/*
  flat
  Возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень глубины.
*/

// let superArr = [
//   [1, 5, 58, 11],
//   [54, [15, [1], 6], 17],
//   [2, [65, 47], 89],
// ];

// const flattedArr = superArr.flat(2);

// console.log(flattedArr);
// console.log(superArr);

//////////////////////////////////////////////

/*
  flatMap
  Сначала применяет функцию к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив.
  Это идентично map функции, с последующим применением функции flat с параметром depth (глубина) равным 1
*/

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

// Собрать в allTopics массив всех предметов всех курсов с обычным map и flatMap.

// const allTopicsWithMap = courses.map(course => course.topics);
// const allTopics = courses.flatMap(course => course.topics);

// console.log(allTopics); // 25
// console.log(allTopicsWithMap); // 4

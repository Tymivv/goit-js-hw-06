const numberOfCategories = document.querySelectorAll('li.item');
console.log('Number of categories:', numberOfCategories.length);
const numberH2 = document.querySelectorAll('li.item h2');
for (let i = 0; i < numberH2.length; i += 1) {
    console.log('Category: ', numberH2[i].textContent);
    const numberLi = numberOfCategories[i].querySelectorAll('li');
    console.log('Elements: ', numberLi.length);
}

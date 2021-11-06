const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];




const ingredientsContainerEl = document.querySelector('#ingredients');

const makeingredients = ingredients => {
    return ingredients.map(option => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = option;

    return itemEl;
    });
};

const elements = makeingredients(ingredients);
ingredientsContainerEl.append(...elements);




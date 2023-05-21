const navCategoriesEl = document.querySelector('#categories');

console.log('Number of categories:', navCategoriesEl.children.length);

[...navCategoriesEl.children].forEach(category => {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
});
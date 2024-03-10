const button = document.querySelector('#dropdown_programming_language .dropdown__value');
const list = document.querySelector('#dropdown_programming_language .dropdown__list');
const listItems = document.querySelectorAll('a.dropdown__link')
listItems.forEach((element) => {
    element.addEventListener('click', (event) => {event.preventDefault()});
})
button.addEventListener('click', () => {
    if (!list.classList.contains('dropdown__list_active')) {
        list.className = 'dropdown__list dropdown__list_active';
    } else {
        list.className = 'dropdown__list';
    }
})
console.log(list.children)
for (const item of list.children) {
    item.addEventListener('click', () =>
    {
        button.textContent = item.textContent;
        list.className = 'dropdown__list';
    })
}
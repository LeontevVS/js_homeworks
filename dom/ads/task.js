const firstRotatorsElements = document.querySelectorAll('#first_rotator .rotator__case');
console.log(firstRotatorsElements);
const firsElementSpeed = firstRotatorsElements[0].dataset.speed
function rotate(index, collection) {
    for (const item of collection) {
        item.className = 'rotator__case';
    }
    const element = collection[index];
    element.className = 'rotator__case rotator__case_active';
    element.style.color = element.dataset.color;
    setTimeout(
        rotate, 
        element.dataset.speed, 
        index < collection.length - 1 ? index + 1 : 0,
        collection
    )
}
setTimeout(
    rotate, 
    firsElementSpeed, 
    0,
    firstRotatorsElements
)
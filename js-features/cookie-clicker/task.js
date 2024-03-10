const imageToClick = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
const defaultWidth = Number(imageToClick.width);
imageToClick.addEventListener('click', () => {
    clickCounter.textContent = Number(clickCounter.textContent) + 1;
    if (Number(clickCounter.textContent) % 2 != 0) {
        imageToClick.width *= 1.25;
    } else {
        imageToClick.width = defaultWidth;
    };
});
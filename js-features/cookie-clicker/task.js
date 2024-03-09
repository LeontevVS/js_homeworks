const imageToClick = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
const defaultWidth = Number(imageToClick.width);
const defaultHeight = Number(imageToClick.height);
imageToClick.addEventListener('click', () => {
    clickCounter.textContent = Number(clickCounter.textContent) + 1;
    if (Number(clickCounter.textContent) % 2 != 0) {
        imageToClick.width *= 1.25;
        imageToClick.height *= 1.25;
    } else {
        imageToClick.width = defaultWidth;
        imageToClick.height = defaultHeight;
    };
});
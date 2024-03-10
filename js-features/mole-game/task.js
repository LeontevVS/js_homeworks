const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
getHole = index => document.getElementById(`hole${index}`);
resetStats = (messageText) => {
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
    stop();
    alert(messageText);
}
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
        } else {
            lostCounter.textContent = Number(deadCounter.textContent) + 1;
        }
        if (Number(deadCounter.textContent) >= 10) {
            resetStats('Победа');
        };
        if (Number(lostCounter.textContent) >= 5) {
            resetStats('Вы проиграли! :(');
        };
    })
}
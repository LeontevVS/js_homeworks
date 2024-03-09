const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
getHole = index => document.getElementById(`hole${index}`);
resetStats = () => {
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
    stop();
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
            alert('Победа');
            resetStats();
        };
        if (Number(lostCounter.textContent) >= 5) {
            alert('Вы проиграли! :(');
            resetStats();
        };
    })
}
const secondsCounter = document.getElementById('timer');
const interval = setInterval(() => {
    const secondsCount = Number(secondsCounter.textContent);
    if (secondsCount > 0) {
        secondsCounter.textContent = secondsCount - 1;
        return;
    };
    alert('Вы победили в конкурсе!');
    clearInterval(interval)
}, 1000);
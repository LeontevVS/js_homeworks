const revealBlocks = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
    for (const block of revealBlocks) {
        const { top, bottom } = block.getBoundingClientRect();
        if (top > window.innerHeight || bottom < 0) {
            block.className = 'reveal'
        } else {
            block.className = 'reveal reveal_active'
        }
    }
})
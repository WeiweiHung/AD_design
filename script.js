const character = document.getElementById('character');
let isWalking = false;
let isFacingRight = false;
let touchStartX = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'ArrowLeft') {
        startWalking(false);
    } else if (event.key === 'd' || event.key === 'ArrowRight') {
        startWalking(true);
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'a' || event.key === 'ArrowLeft' || event.key === 'd' || event.key === 'ArrowRight') {
        stopWalking();
    }
});

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    stopWalking();
});

document.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

document.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 0) {
        startWalking(true); // 向右移動
    } else {
        startWalking(false); // 向左移動
    }
});

document.addEventListener('touchcancel', stopWalking);

function startWalking(right) {
    console.log('Start walking:', right ? 'right' : 'left');
    isWalking = true;
    isFacingRight = right;
    updateCharacter();
    moveCharacter(right ? 'right' : 'left');
}

function stopWalking() {
    console.log('Stop walking');
    isWalking = false;
    updateCharacter();
}

function updateCharacter() {
    if (isWalking) {
        character.style.backgroundImage = `url('${isFacingRight ? 'walk-right.png' : 'walk-left.png'}')`;
    } else {
        character.style.backgroundImage = `url('${isFacingRight ? 'stand-right.png' : 'stand-left.png'}')`;
    }
}

function moveCharacter(direction) {
    const currentLeft = parseFloat(character.style.left) || 50;
    const step = 1;

    if (direction === 'right') {
        character.style.left = `${Math.min(currentLeft + step, 100)}%`;
    } else if (direction === 'left') {
        const boundary = 0;
        if (currentLeft - step >= boundary) {
            character.style.left = `${currentLeft - step}%`;
        }
    }
}

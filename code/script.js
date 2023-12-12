const character = document.getElementById('character');

let isWalking = false;
let isFacingRight = false;

document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'ArrowLeft') {
        console.log('Key pressed:', event.key);
        isWalking = true;
        isFacingRight = false;
        updateCharacter();
    } else if (event.key === 'd' || event.key === 'ArrowRight') {
        console.log('Key pressed:', event.key);
        isWalking = true;
        isFacingRight = true;
        updateCharacter();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'a' || event.key === 'ArrowLeft' || event.key === 'd' || event.key === 'ArrowRight') {
        isWalking = false;
        updateCharacter();
    }
});

document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // 防止右鍵點擊的默認行為
    isWalking = false;
    updateCharacter();
});

function updateCharacter() {
    if (isWalking) {
        character.style.backgroundImage = `url('${isFacingRight ? 'walk-right.png' : 'walk-left.png'}')`;
        character.style.transform = isFacingRight ? 'scaleX(1)' : 'scaleX(-1)';
    } else {
        character.style.backgroundImage = `url('${isFacingRight ? 'stand-right.png' : 'stand-left.png'}')`;
        character.style.transform = isFacingRight ? 'scaleX(1)' : 'scaleX(-1)';
    }
}
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
        console.log('Key pressed:');
        moveCharacter(isFacingRight ? 'right' : 'left');
        
    } else {
        character.style.backgroundImage = `url('${isFacingRight ? 'stand-right.png' : 'stand-left.png'}')`;
        console.log('Key pressed:');
        
    }
}
function moveCharacter(direction) {
    const currentLeft = parseFloat(character.style.left) || 50; // 初始位置為 left: 50%
    const step = 1; // 移動步長，根據需要調整

    if (direction === 'right') {
        character.style.left = `${Math.min(currentLeft + step, 100)}%`; // 限制在右邊界內
    } else if (direction === 'left') {
        const boundary = 0; // 螢幕左邊界
        if (currentLeft - step >= boundary) {
            character.style.left = `${currentLeft - step}%`;
        }
    }
}

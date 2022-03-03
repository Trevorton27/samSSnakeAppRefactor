let canvas = document.getElementById('snake-game-canvas');
let canvasContext;
let snakePositionX = 100;
let snakePositionY = 300;
let framesPerSecond = 30;

window.onload = () => {
    console.log('hello');
    drawCanvas();
    drawSnake();
}

function drawCanvas() {
    console.log('sup');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    console.log('snake')
    canvasContext.beginPath();
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(snakePositionX, snakePositionY, 20, 20);
    canvasContext.fill();
    canvasContext.closePath();
}

function moveSnake() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    window.addEventListener('keydown', function (e) {
        switch (e.code) {
            case 'ArrowUp':
                console.log('ArrowUp')
                snakePositionY -= 1;
                break;
            case 'ArrowDown':
                console.log('ArrowDown')
                snakePositionY += 1;
                break;
            case 'ArrowLeft':
                console.log('ArrowLeft')
                snakePositionX -= 1;
                break;
            case 'ArrowRight':
                console.log('ArrowRight')
                snakePositionX += 1;
                break;
            }
        })
    // snakePositionX += 10;    
    // snakePositionX += 10;
    drawSnake();
}
                
                
                
                
                
                
                
setInterval(moveSnake, 500);


/* ----------------
    so to get the snake to move, we need to set the base snake size in a global variable
    (see call when I asked this at about 1:02:30)

    e.key...keydown


---------- */
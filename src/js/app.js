//import { obj } from './test';
//
//document.addEventListener('DOMContentLoaded', function() {
//
//    //tutaj skrypty
//    obj.print("To jest wiadomosc bardzo ważna");
//    obj.print();
//
//});

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw / 2 - (ballSize / 2);
let ballY = ch / 2 - (ballSize / 2);

const paddleHeight = 100;
const paddleWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 4;
let ballSpeedY = 4;

const table = function () {
    // stół
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, cw, ch);
    // linie na środku
}

const ball = function () {

    ctx.fillStyle = "#fff";
    ctx.fillRect(ballX, ballY, ballSize, ballSize);

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
        speedUp();
    }

    if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
        speedUp();
    }
}

const player = function () {

    ctx.fillStyle = "green";
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
}

const ai = function () {

    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);
}

const middleLine = function () {

    for (let linePos = 20; linePos < ch; linePos += 30) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(cw / 2 - (lineWidth / 2), linePos, lineWidth, lineHeight);
    }
}

let topCanvas = canvas.offsetTop;

let playerPosition = function (e) {
    playerY = (e.clientY - topCanvas - paddleHeight / 2);

    if (playerY <= 0)
        playerY = 0;
    if (playerY >= ch - paddleHeight)
        playerY = ch - paddleHeight;

    // aiY = playerY;
}

let speedUp = function () {

    //predkość X
    if (ballSpeedX > 0 && ballSpeedX < 16) {
        ballSpeedX += 0.5;
    } else if (ballSpeedX < 0 && ballSpeedX > -16) {
        ballSpeedX -= 0.5;
    }

    //predkość Y
    if (ballSpeedY > 0 && ballSpeedY < 16) {
        ballSpeedY += 0.2;
    } else if (ballSpeedY < 0 && ballSpeedY > -16) {
        ballSpeedY -= 0.2;
    }
}

// Sztuczna inteligencja
let aiPosition = function () {
    if (ballX > 500) {

    }

    if (ballX <= 500 && ballX > 150) {

    }
}

canvas.addEventListener("mousemove", playerPosition)

let game = function () {
    table();
    ball();
    player();
    ai();
    middleLine();
    aiPosition();

}

setInterval(game, 1000 / 60);
'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `🎉 Correct Number`;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', () => {
    // reset score
    score = 20;
    // add score to score message
    document.querySelector('.score').textContent = score;
    // pick new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // reset starting message
    document.querySelector('.message').textContent = `Start guessing...`;
    // reset the input value
    document.querySelector('.guess').value = '';
    // reset the background color
    document.querySelector('body').style.backgroundColor = '#222';
    // reset the secret number guess box size
    document.querySelector('.number').style.width = '15rem';
    // reset secret number guess box
    document.querySelector('.number').textContent = '?';



});

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // When no input
    if (!guess) {
        document.querySelector('.message').textContent = `⛔️ No number`;
        // When play wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = `🎉 Correct number`;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // setting the highscore on win
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? `📈 Too high` : `📉 Too low`;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `💥 You lost the game!`;
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});
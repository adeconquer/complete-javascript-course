'use strict';


const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


// Starting conditions
let scores, currentScore, activePlayer, isPlaying
const init = function() {
    score1.textContent = 0;
    score2.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;
}

init();
// score1.textContent = 0;
// score2.textContent = 0;
// diceEl.classList.add('hidden');

// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let isPlaying = true;

const switchPlayer = function() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const rollDice = function() {
    if (isPlaying) {
        // 1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1
            // 2. Display dice
        diceEl.classList.remove('hidden')
        diceEl.setAttribute('src', `dice-${dice}.png`);
        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();


        }
    }




};

const holdDice = function() {
    if (isPlaying) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        // Finish the game
        if (scores[activePlayer] >= 20) {
            isPlaying = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }

    }





};




const reset = function() {
    init();
    score1.textContent = 0;
    score2.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.add('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player1El.classList.remove('player--winner');
    diceEl.style.display = 'none';

};

// Rolling dice functionality
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdDice);
btnNew.addEventListener('click', reset);
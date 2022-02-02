'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
const compImageEl = document.querySelector('.compImage');
const humanImageEl = document.querySelector('.humanImage');
const crown1El = document.querySelector('.crown1');
const crown2El = document.querySelector('.crown2');
const btnNew = document.getElementById('btn--0');
const btnPap = document.getElementById('btn--1');
const btnLap = document.getElementById('btn--2');
const btnScal = document.getElementById('btn--3');
const possibleChoices = document.querySelectorAll('button');

let playing = true,
  userChoice,
  comChoice,
  score1,
  score2;

possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener('click', e => {
    if (playing) {
      humanImageEl.classList.remove('hidden');
      if (e.target.id === 'btn--0') {
        userChoice = 0;
      } else if (e.target.id === 'btn--1') {
        userChoice = 1;
      } else if (e.target.id === 'btn--2') {
        userChoice = 2;
      } else if (e.target.id === 'btn--3') {
        userChoice = 3;
      }
      humanImageEl.src = `image-${userChoice}.png`;
      compareChoices();
      // console.log(userChoice, cChoice());
    }
  })
);

const init = function () {
  score0El.innerText = 0;
  score1El.innerText = 0;
  compImageEl.classList.add('hidden');
  humanImageEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  crown1El.classList.add('hidden');
  crown2El.classList.add('hidden');
  playing = true;
};
init();

//first need to make computer random choice
function cChoice() {
  const ranNum = Math.trunc(Math.random() * 3) + 1;
  compImageEl.classList.remove('hidden');
  compImageEl.src = `image-${ranNum}.png`;
  return ranNum;
}

let compareChoices = function () {
  comChoice = cChoice();
  score1 = Number(score0El.innerText);
  score2 = Number(score1El.innerText);

  if (userChoice === comChoice) {
    score0El.innerText = score1 + 0;
    score1El.innerText = score2 + 0;
  } else if (userChoice === 1) {
    if (comChoice === 2) {
      //user wins
      score0El.innerText++;
    } else {
      score1El.innerText++; //computer wins
    }
  } else if (userChoice === 2) {
    if (comChoice === 1) {
      score1El.innerText++; //computer wins
    } else {
      score0El.innerText++;
    }
  } else if (userChoice === 3) {
    if (comChoice === 1) {
      score0El.innerText++; //user wins
    } else {
      score1El.innerText++; //computer wins
    }
  }
  if (score0El.innerText >= 10) {
    playing = false;
    player0El.classList.add('player--winner');
    crown1El.classList.remove('hidden');
  } else if (score1El.innerText >= 10) {
    playing = false;
    player1El.classList.add('player--winner');
    crown2El.classList.remove('hidden');
  }
};

btnNew.addEventListener('click', function () {
  init();
});

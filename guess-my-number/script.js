'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreNumber = 20;
let hightScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(secretNumber);
  let number = Number(document.querySelector('.guess').value);
  if (number === 0) {
    displayMessage('⛔ No Number');
  } else if (number < 0 || number > 20) {
    displayMessage('🤯 Only between 1 and 20');
  } else if (scoreNumber === 1) {
    displayMessage('💥 You lost the game');
    scoreNumber--;
  } else if (secretNumber === number) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (scoreNumber > hightScore) {
      hightScore = scoreNumber;
    }
    document.querySelector('.highscore').textContent = hightScore;
  } else if (number !== secretNumber && scoreNumber > 0) {
    displayMessage(number > secretNumber ? '📈 Too hight' : '📉 Too Low');
    scoreNumber--;
  }
  document.querySelector('.score').textContent = scoreNumber;
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  scoreNumber = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

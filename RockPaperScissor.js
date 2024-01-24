

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


const resetScores = () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  updateScoreElement();
  localStorage.removeItem('score');
}

const playGame = (playerMove) => {
  const computerMove = computerTurn();
  let result = '';
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    }
    if (computerMove === 'paper') {
      result = 'You lose';
    }
    if (computerMove === 'scissor') {
      result = 'You win';
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    }
    if (computerMove === 'paper') {
      result = 'Tie.';
    }
    if (computerMove === 'scissor') {
      result = 'You lose';
    }
  }

  if (playerMove === 'scissor') {
    if (computerMove === 'rock') {
      result = 'You lose';
    }
    if (computerMove === 'paper') {
      result = 'You win';
    }
    if (computerMove === 'scissor') {
      result = 'Tie.';
    }
  }

  localStorage.setItem('score', JSON.stringify(score));

  if (result === 'You win') {
    score.wins++;
  }
  else if (result === 'You lose') {
    score.losses++;
  }
  else if (result === 'Tie.') {
    score.ties++;
  }


  document.querySelector('#game-result').innerHTML = `${result}.`;
  document.querySelector('#game-options').innerHTML = `You
      <img src ='images/${playerMove}-emoji.png' class='move-icon'>
      <img src ='images/${computerMove}-emoji.png' class='move-icon'>
       computer`;
  updateScoreElement();

  //       alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}.
  // wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}
  //       `)

}

const updateScoreElement = () => {
  document.querySelector('#game-score').innerHTML = `wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
}


const computerTurn = () => {
  const randomNumber = Math.random();
  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber > 1 / 3 && randomNumber > 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber > 2 / 3 && randomNumber >= 1) {
    computerMove = 'scissor';
  }

  return computerMove;
}
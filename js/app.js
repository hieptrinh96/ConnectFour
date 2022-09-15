/*-------------------------------- Constants --------------------------------*/

const rows = 6;
const columns = 7;

/*---------------------------- Variables (state) ----------------------------*/

let colArr = [5, 5, 5, 5, 5, 5, 5];
let playerOne = 'blue';
let playerTwo = 'yellow';
let current = playerOne;
let gameComplete = false;
let board = [];
let divs;

/*------------------------ Cached Element References ------------------------*/

const gameBoard = document.querySelector('.game-board')
const resetButton = document.getElementById('reset')
const cells = document.getElementsByClassName('cell');
const startButton = document.getElementById('start-button');

/*-------------------------------EventListeners--------------------------------*/

startButton.addEventListener('click', init);
window.addEventListener('keydown', gameStarter);
window.addEventListener('keydown', gameReset)
resetButton.addEventListener('click', resetBoard);

/*-------------------------------- Functions --------------------------------*/

function init() {
  startButton.setAttribute('hidden', true);
  for (let i = 0; i < rows; i++) {
    let rowArr = [];
    for (let j = 0; j < columns; j++) {
      rowArr.push(' ');
      const circle = document.createElement('div');
      circle.id = `${i}, ${j}`;
      circle.classList.add('cell');
      gameBoard.appendChild(circle);
    }
    board.push(rowArr);
  }
  divs = Array.from(cells);
  divs.forEach(div => {
    div.addEventListener('click', renderCircles);
  })
}

function renderCircles() {
  if (gameComplete) return;

  let row;
  let pairs = this.id.split(',');
  let col = parseInt(pairs[1]);
  row = colArr[col];

  if (row < 0) return;

  board[row][col] = current;
  let piece = document.getElementById(`${row}, ${col}`);

  if (current === playerOne) {
    piece.classList.add('blue');
    current = playerTwo;
  }
  else {
    piece.classList.add('yellow');
    current = playerOne;
  }
  row -= 1;
  colArr[col] = row;
  getWinner();
}

function getWinner() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== ' ') {
        if (board[i][j] === board[i][j + 1] &&
          board[i][j + 1] === board[i][j + 2] &&
          board[i][j + 2] === board[i][j + 3]) {
          setWinner(i, j);
          return;
        }
      }
    }
  }

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows - 3; j++) {
      if (board[j][i] !== ' ') {
        if (board[j][i] === board[j + 1][i] &&
          board[j + 1][i] === board[j + 2][i] &&
          board[j + 2][i] === board[j + 3][i]) {
          setWinner(j, i);
          return;
        }
      }
    }
  }

  for (let i = 3; i < rows; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== ' ') {
        if (board[i][j] === board[i - 1][j + 1] &&
          board[i - 1][j + 1] === board[i - 2][j + 2] &&
          board[i - 2][j + 2] === board[i - 3][j + 3]) {
          setWinner(i, j);
          return;
        }
      }
    }
  }

  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== ' ') {
        if (board[i][j] === board[i + 1][j + 1] &&
          board[i + 1][j + 1] === board[i + 2][j + 2] &&
          board[i + 2][j + 2] === board[i + 3][j + 3]) {
          setWinner(i, j);
          return;
        }
      }
    }
  }
}

function setWinner(i, j) {
  let winner = document.getElementById('winner');
  if (board[i][j] === playerOne) {
    winner.textContent = 'Player One Wins!';
  }
  else if (board[i][j] === playerTwo) winner.textContent = 'Player Two Wins!';
  else winner.textContent = 'Looks like a Tie!'
  gameComplete = true;
}

function gameStarter(evt) {
  if (evt.key === 'Enter') init();
}

function gameReset(evt) {
  if (evt.key === ' ') resetBoard();
}

function resetBoard() {
  colArr = [5, 5, 5, 5, 5, 5, 5];
  current = playerOne;
  gameComplete = false;
  divs.forEach(div => {
    if (div.classList.contains('yellow')) {
      div.classList.remove('yellow');
    }
    else if (div.classList.contains('blue')) {
      div.classList.remove('blue');
    }
  })
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j]) {
        board[i][j] = ' ';
      }
    }
  }
}
/*-------------------------------- Constants --------------------------------*/

const rows = 6;
const columns = 7;
const rowArr = [];


/*---------------------------- Variables (state) ----------------------------*/
let gameBoard;
let playerOne = 'red';
let turn = playerOne;
let playerTwo = 'yellow';
let gameComplete = false;
let lastColumn = [];
/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.game-board');
const cells = document.getElementsByClassName('cell');
const winner = document.getElementById('winner');
const message = document.getElementById('message')
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
init();
function init() {
  gameBoard = [];
  lastColumn = [5, 5, 5, 5, 5, 5, 5]
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      rowArr.push(' ');
      const divElement = document.createElement('div');
      divElement.id = `${i}, ${j}`;
      divElement.classList.add('cell');
      divElement.addEventListener('click', renderCircles)
      board.appendChild(divElement);
    }
  }
  gameBoard.push(rowArr)
}

function renderCircles() {
  if (winner) return;

  let pairs = this.id.split(',');
  let row = parseInt(pairs[0]);
  let column = parseInt(pairs[1]);
  r = lastColumn[column];

  if (row < 0) return;
  gameBoard[row][column] = turn;
  const puck = document.getElementById(`${row}, ${column}`);
  if (turn === playerOne) {
    puck.classList.add('red');
    turn = playerTwo;
  }
  else {
    puck.classList.add('yellow');
    turn = playerOne;
  }
  row -= 1;
  winningCombos();
}

function winningCombos() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (gameBoard[i][j] !== ' ') {
        if (gameBoard[i][j] === gameBoard[i + 1][j + 1] && gameBoard[i + 2][j + 2] === gameBoard[i + 3][j + 3]) {
          getWinner(i, j);
          return;
        }
      }
    }
  }
}

function getWinner(i, j) {
  if (gameBoard[i][j] === playerOne) winner.textContent = 'Player One Wins!';
  else winner.textContent = 'Player Two Wins!';
  gameComplete = true;
}
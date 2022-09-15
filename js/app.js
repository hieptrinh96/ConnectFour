/*-------------------------------- Constants --------------------------------*/

const rows = 6;
const columns = 7;

/*---------------------------- Variables (state) ----------------------------*/

let playerOne = 'blue';
let playerTwo = 'yellow';
let current = playerOne;
let gameComplete = false;
let colArr = [];
let board;

/*------------------------ Cached Element References ------------------------*/

const gameBoard = document.querySelector('.game-board')

/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  // arr will hold the corresponding divs
  board = [];

  colArr = [5, 5, 5, 5, 5, 5, 5];

  // iterate through rows and columns to create the divs
  for (let i = 0; i < rows; i++) {
    let rowArr = [];
    for (let j = 0; j < columns; j++) {
      rowArr.push(' ');
      const circle = document.createElement('div');
      circle.id = `${i}, ${j}`;
      // add cell class for styling
      circle.classList.add('cell');
      // allows access to each div created
      circle.addEventListener('click', renderCircles);
      gameBoard.appendChild(circle);
    }
    // pushes empty strings as placeholders for our arr
    board.push(rowArr);
  }
}

function renderCircles() {
  // if there is a winner, don't allow anymore clicks
  if (gameComplete) return;
  // since this is attached to each div, this gives us the coordinates for each one
  let pairs = this.id.split(',');
  let row = parseInt(pairs[0]);
  let col = parseInt(pairs[1]);
  row = colArr[col];

  if (row < 0) return;
  // sets our current coordinate to a color
  board[row][col] = current;
  let piece = document.getElementById(`${row}, ${col}`);
  // match that color so we can change the color
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
  // checks horizontally 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== ' ') {
        if (board[i][j] === board[i][j + 1] && board[i][j + 1] === board[i][j + 2] && board[i][j + 2] === board[i][j + 3]) {
          setWinner(i, j);
          return;
        }
      }
    }
  }
  // checks vertically
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows - 3; j++) {
      if (board[j][i] !== ' ') {
        if (board[j][i] === board[j + 1][i] && board[j + 1][i] === board[j + 2][i] && board[j + 2][i] === board[j + 3][i]) {
          setWinner(j, i);
          return;
        }
      }
    }
  }
  // checks diagonally
  for (let i = 3; i < rows; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== ' ') {
        if (board[i][j] === board[i - 1][j + 1] && board[i - 1][j + 1] === board[i - 2][j + 2] && board[i - 2][j + 2] === board[i - 3][j + 3]) {
          setWinner(i, j);
          return;
        }
      }
    }
  }
  // checks reverse diagonally
  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== ' ') {
        if (board[i][j] === board[i + 1][j + 1] && board[i + 1][j + 1] === board[i + 2][j + 2] && board[i + 2][j + 2] === board[i + 3][j + 3]) {
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
  else winner.textContent = 'Player Two Wins!';
  gameComplete = true;
}
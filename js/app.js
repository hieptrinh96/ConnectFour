/*-------------------------------- Constants --------------------------------*/

const row = 6;
const column = 7;
const arrOfCoords = [];

/*---------------------------- Variables (state) ----------------------------*/

let winner = false;
let playerOne = 'red';
let turn = playerOne;
let playerTwo = 'yellow';

/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.game-board');
const cells = document.getElementsByClassName('cell');
const message = document.getElementById('message')
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/


// create an init function that will create the container board div
// set a row and column variable to create the grid layout
// set the variables such as board, playerOne, playerTwo, Winner
// create a function to 

init();
console.log(arrOfCoords.length)
function init() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const divElement = document.createElement('div');
      divElement.classList.add('cell');
      divElement.id = `${i}, ${j}`;
      arrOfCoords.push(divElement.id)
      divElement.addEventListener('click', renderCircles)
      board.appendChild(divElement);
    }
  }
}
//have the pieces show up on the board and change the turn
// once we click on a circle, what do we want it to do
function renderCircles() {
  if (turn === playerOne) {
    this.classList.add('red');
    turn = playerTwo;
  }
  else if (turn === playerTwo) {
    this.classList.add('yellow');
    turn = playerOne;
  }
}

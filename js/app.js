/*-------------------------------- Constants --------------------------------*/

const row = 6;
const column = 7;
const arrOfCoords = [];

/*---------------------------- Variables (state) ----------------------------*/

let turn = 1;
let winner = false;
let playerOne = 'red';
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

function init() {

  for (let i = 0; i < row; i++) {

    for (let j = 0; j < column; j++) {

      const divElement = document.createElement('div');
      divElement.classList.add('cell');
      divElement.id = `${i}, ${j}`;
      divElement.addEventListener('click', renderCircles)
      board.appendChild(divElement);
    }

  }

}

//have the pieces show up on the board and change the turn
function renderCircles() {
  // check to see if game is over
  if (winner) return;

  const circleDiv = document.createElement('div');
  // check to see whose turn is it
  if (turn === 1) {
    message.textContent = `Player ${turn}'s turn`;
    circleDiv.classList.add('red');
    turn * -1;
  }
}

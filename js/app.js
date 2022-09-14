/*-------------------------------- Constants --------------------------------*/

const row = 6;
const column = 7;
const coordinates = [];

/*---------------------------- Variables (state) ----------------------------*/

let playerOne = 'red';
let playerTwo = 'yellow';
let winner = false;
let arrOfDivs;

/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.game-board');
const cells = document.getElementsByClassName('cell');

/*----------------------------- Event Listeners -----------------------------*/

arrOfDivs = Array.from(cells);
arrOfDivs.forEach(cell => {
  cell.addEventListener('click', () => {
    console.log(cell);
  })
})
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
      divElement.addEventListener('click', () => console.log(divElement))
      board.appendChild(divElement);
    }
  }

}
/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let playerOne = 'red';
let playerTwo = 'yellow';
let current = playerOne;

/*------------------------ Cached Element References ------------------------*/
const titlePage = document.querySelector('.title-page')
const gameBoard = document.querySelector('.game-board');

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
init();
function init() {
  for (let i = 0; i < 42; i++) {
    const divElements = document.createElement('div');
    divElements.classList.add('cell');
    gameBoard.appendChild(divElements)
    divElements.onmouseenter = () => {
      columnMaker(i % 7);
    }
  }
}

function eraseCircle() {
  let removedCircle = document.querySelector('[data-placed=false]')
  if (removedCircle) removedCircle.parentElement.removeChild(removedCircle)
}

function columnMaker(column) {
  eraseCircle();
  let divElements = gameBoard.children[column];
  let circle = document.createElement('div');
  circle.className = 'circle';
  circle.dataset.placed = false;
  divElements.appendChild(circle);

}


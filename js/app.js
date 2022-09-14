
const row = 6;
const column = 7;

const board = document.querySelector('.game-board');

init();

function init() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const divElement = document.createElement('div');
      divElement.classList.add('cell');
      board.appendChild(divElement);
    }
  }
}
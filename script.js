const grid = document.querySelector('#container');

function createGrid(size = 16) {
  let cellWidth = 320/size - 2;
  let cellHeight = 320/size - 2;
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let cell = document.createElement('div');
      cell.style.width = `${cellWidth}px`;
      cell.style.height = `${cellHeight}px`;
      cell.classList.add('grid-cell');
      grid.appendChild(cell);
    }
  }

  let cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.classList.add('fill-cell');
  }));
  return cells;
}

createGrid();

function clearGrid() {
  let cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => cell.classList.remove('fill-cell'));
}

const clearBtn = document.querySelector('#clear-grid');
clearBtn.addEventListener('click', clearGrid);

const newGrid = document.querySelector('#new-grid');
newGrid.addEventListener('click', () => {
  wipe();
  let newSize = prompt('Set new size (max 100)', 16);
  createGrid(newSize);
});

function wipe() {
  let cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => grid.removeChild(cell));
}
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

  let brush = document.querySelector('#soft');
  let color = document.querySelector('#color-picker');
  let cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => { 
    let alpha = 0;
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = color.value;
      if (brush.selected == true) {
        alpha += 0.2;
        cell.style.opacity = alpha;
      } else {
        cell.style.opacity = 1;
      }
    });
  });

}

function clearGrid() {
  let cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => { 
    cell.style.backgroundColor = '#202328';
    cell.style.opacity = 1;
  });
}

const clearBtn = document.querySelector('#clear-grid');
clearBtn.addEventListener('click', clearGrid);

let slider = document.querySelector('#slider');
let output = document.querySelector('#slider-info');

slider.addEventListener('input', () => {
  let newSize = slider.value;
  output.textContent = `${newSize} x ${newSize}`;
  wipe();
  createGrid(newSize);
});

// const newGrid = document.querySelector('#new-grid');
// newGrid.addEventListener('click', () => {
//   wipe();
//   let newSize = prompt('Set new size (max 100)', 16);
//   createGrid(newSize);
// });

function wipe() {
  let cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => grid.removeChild(cell));
}

createGrid();
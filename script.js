let container = document.querySelector('#container');

function createGrid(size = 16) {
  let cellWidth = 18;
  let cellHeight = 18;

  container.style.width = `${size * (cellWidth + 2) }px`;
  container.style.height = `${size * (cellHeight + 2)}px`;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let div = document.createElement('div');
      div.style.width = `${cellWidth}px`;
      div.style.height = `${cellHeight}px`;
      div.classList.add('grid-cell');
      container.appendChild(div);
    }
  }

  let divs = document.querySelectorAll('.grid-cell');
  divs.forEach(div => div.addEventListener('mouseover', () => {
    div.classList.add('fill-cell');
  }));
  return divs;
}

createGrid();

let controls = document.querySelector('#controls');
let clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear Grid';
controls.appendChild(clearBtn);

clearBtn.addEventListener('click', clearGrid);

function clearGrid() {
  let divs = document.querySelectorAll('.grid-cell');
  divs.forEach(div => div.classList.remove('fill-cell'));
}

let newBtn = document.createElement('button');
newBtn.textContent = 'New Grid';
controls.appendChild(newBtn);

newBtn.addEventListener('click', () => {
  wipe();
  createGrid(prompt('Set new grid size (max 100)', 16));
});

function wipe() {
  let divs = document.querySelectorAll('.grid-cell');
  divs.forEach(div => container.removeChild(div));
}


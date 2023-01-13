const container = document.getElementById('sketch-canvas');

// Generates the etch-a-sketch canvas
makeRows(48);

// Fills each square as mouse hovers creating a drawing effect
const grid = document.querySelectorAll('.grid-item');
grid.forEach(square => square.addEventListener('mouseover', hover));


function makeRows(gridSize) {
    rows = gridSize;
    cols = gridSize;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < rows * cols; c++) {
      let cell = document.createElement('div');
      container.appendChild(cell).className = 'grid-item';
    }
  }

  function hover() {
    this.style.backgroundColor = 'green';
  }

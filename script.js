const sketchCanvas = document.getElementById('sketch-canvas');
const sketchButton = document.getElementById('sketch-scale');
const toggleButton = document.getElementById('toggle-grid');

// Generates the etch-a-sketch canvas
createCanvas(16);

// Fills each square as mouse hovers creating a drawing effect
enableSketch();

let gridScale;
sketchButton.addEventListener('click', () => {
  // Grid cannot exceed 100 without slowing computer
  do {
    gridScale = parseInt(prompt());
  } while (gridScale < 2 || gridScale > 100);

  // Delete previous canvas and generate new one
  sketchCanvas.textContent = '';
  createCanvas(gridScale);
  enableSketch();
});

toggleButton.addEventListener('click', toggleLines);


// Abstracted functions below

function createCanvas(gridSize) {
  rows = gridSize;
  cols = gridSize;
  sketchCanvas.style.setProperty('--grid-rows', rows);
  sketchCanvas.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    sketchCanvas.appendChild(cell).className = 'grid-item';
  }
}

function toggleLines() {
  const grid = document.querySelectorAll('.grid-item');
  grid.forEach((square) => {
    if (square.style.border === 'none') {
      square.style.border = '1px solid #ddd';
    } else {
      square.style.border = 'none';
    }
  });
}

function enableSketch() {
  const grid = document.querySelectorAll('.grid-item');
  grid.forEach((square) =>
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'green';
    })
  );
}

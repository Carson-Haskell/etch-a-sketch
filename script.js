const sketchCanvas = document.getElementById('sketch-canvas');
const sketchButton = document.getElementById('sketch-scale');
const toggleButton = document.getElementById('toggle-grid');
const resetButton = document.getElementById('reset-grid');

// Will be assigned and deleted every time a canvas is created
let gridSquares;

// Default grid scale
let gridScale = 64;

// Generates the etch-a-sketch canvas
createCanvas(gridScale);

// Only draw while the mouse is pressed
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

sketchButton.addEventListener('click', () => {
  // Grid cannot exceed 100 without slowing computer
  do {
    gridScale = parseInt(prompt());
  } while (gridScale < 2 || gridScale > 100 || !gridScale);

  createCanvas(gridScale);
});

toggleButton.addEventListener('click', toggleLines);

resetButton.addEventListener('click', resetCanvas);

// Abstracted functions below

function createCanvas(gridSize) {
  sketchCanvas.textContent = ''; // Resets canvas every time function is called

  rows = gridSize;
  cols = gridSize;

  sketchCanvas.style.setProperty('--grid-rows', rows);
  sketchCanvas.style.setProperty('--grid-cols', cols);

  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    sketchCanvas.appendChild(cell).className = 'grid-item';
  }

  // Add sketch effect with mouse
  enableSketch();
}

function toggleLines() {
  gridSquares = document.querySelectorAll('.grid-item');
  gridSquares.forEach((square) => {
    if (square.style.border === '') {
      square.style.border = '1px solid #76767630';
    } else {
      square.style.border = '';
    }
  });
}

function resetCanvas() {
  gridSquares = document.querySelectorAll('.grid-item');
  gridSquares.forEach((square) => {
    square.style.backgroundColor = '';
  });
}

function enableSketch() {
  gridSquares = document.querySelectorAll('.grid-item');
  gridSquares.forEach((square) =>
    square.addEventListener('mouseover', () => {
      if (!mouseDown) return;

      square.style.backgroundColor = 'black';
    })
  );
}

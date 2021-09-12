const paletteSquares = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const colors = ['black', '#297373', '#ff8552', '#e9d758'];
const button = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const sizeButton = document.getElementById('generate-board');

paletteSquares[0].classList.add('selected');

function paintSquare(square) {
  const moment = square;
  for (let index = 0; index < paletteSquares.length; index += 1) {
    if (paletteSquares[index].classList.contains('selected')) {
      moment.target.style.backgroundColor = colors[index];
    }
  }
}

function generateBoard(size = 5) {
  for (let index = 0; index < size; index += 1) {
    const tag = document.createElement('div');
    pixelBoard.appendChild(tag);
    for (let counter = 0; counter < size; counter += 1) {
      const liPixels = document.createElement('div');
      liPixels.className = 'pixel';
      pixelBoard.children[index].appendChild(liPixels);
      // O João (Spinelli) Gabriel - Turma 16 - A me ajudou a colocar o escutador dentro da função de geração do board
      liPixels.addEventListener('click', paintSquare);
    }
  }
}

generateBoard();

const pixel = document.querySelectorAll('.pixel');
// Pedi ajuda por Discord do meu amigo Douglas Oliveira para resolver questão de for dentro de uma function
// GitHub: https://github.com/dg-os
// Linkedin: https://www.linkedin.com/in/douglas-oliveira-5a03b5b9/
paletteSquares.forEach((item) => {
  item.addEventListener('click', (event) => {
    paletteSquares.forEach((element) => {
      element.classList.remove('selected');
    });
    event.target.classList.add('selected');
  });
});

for (let index = 0; index < paletteSquares.length; index += 1) {
  paletteSquares[index].style.backgroundColor = colors[index];
}

function clearPixel() {
  pixel.forEach((item) => {
    const element = item;
    element.style.backgroundColor = 'white';
  });
}

button.addEventListener('click', clearPixel);

function clearBoard() {
  pixel.forEach(() => {
    const remove = document.querySelectorAll('.pixel');
    remove.forEach((element) => {
      element.parentNode.remove();
    });
  });
}

function sizeErrorValue(size) {
  if (size < 5) {
    return 5;
  }
  if (size > 50) {
    return 50;
  }
  return size;
}

sizeButton.addEventListener('click', () => {
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    clearBoard();
    const sizeInt = parseInt(input.value, 0);
    generateBoard(sizeErrorValue(sizeInt));
  }
});

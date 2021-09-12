const paletteSquares = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const colors = ['black', '#297373', '#ff8552', '#e9d758'];
const button = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const sizeButton = document.getElementById('generate-board');

paletteSquares[0].classList.add('selected');

// Douglas, amigo meu, me ajudou
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

pixel.forEach((item) => {
  item.addEventListener('click', (event) => {
    const moment = event;
    for (let index = 0; index < paletteSquares.length; index += 1) {
      if (paletteSquares[index].classList.contains('selected')) {
        moment.target.style.backgroundColor = colors[index];
      }
    }
  });
});

pixel.forEach((item) => {
  button.addEventListener('click', () => {
    const element = item;
    element.style.backgroundColor = 'white';
  });
});

sizeButton.addEventListener('click', () => {
  if (input.value === '') {
    alert('Board inválido!');
  }
  pixel.forEach((item) => {
    const moment = item;
    const sizeInt = parseInt(input.value, 0);
    if (sizeInt >= 5 && sizeInt <= 50) {
      moment.style.width = `${input.value}px`;
      moment.style.height = `${input.value}px`;
    }
  });
});

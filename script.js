const paletteSquares = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const colors = ['black', '#297373', '#ff8552', '#e9d758'];
const button = document.getElementById('clear-board');

paletteSquares[0].classList.add('selected');

paletteSquares.forEach((item) => {
  item.addEventListener('click', (event) => {
    for (const element of paletteSquares) {
      element.classList.remove('selected');
    }
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

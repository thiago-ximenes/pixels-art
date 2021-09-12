/* eslint-disable no-restricted-syntax */
const paletteSquares = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
// const selectItems = document.querySelectorAll('.selected');
const colors = ['black', '#297373', '#ff8552', '#e9d758'];

paletteSquares[0].classList.add('selected');

paletteSquares.forEach((item) => {
  item.addEventListener('click', (event) => {
    for (const element of paletteSquares) {
      element.classList.remove('selected');
    }
    event.target.classList.add('selected');
    document.querySelector('.selected').style.backgroundColor =
      event.target.style.backgroundColor;
  });
});

for (let index = 0; index < paletteSquares.length; index += 1) {
  paletteSquares[index].style.backgroundColor = colors[index];
}

pixel.forEach((item) => {
  item.addEventListener('click', (event) => {
    const moment = event;
    for (const key in paletteSquares) {
      if (paletteSquares[key].classList.contains('selected')) {
        moment.target.style.backgroundColor = colors[key];
      }
    }
    // event.target.style.backgroundColor = colors[1];
  });
});

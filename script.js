/* eslint-disable no-restricted-syntax */
const paletteSquares = document.querySelectorAll('.color');

paletteSquares[0].classList.add('selected');

paletteSquares.forEach((item) => {
  item.addEventListener('click', (event) => {
    for (const element of paletteSquares) {
      element.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
});

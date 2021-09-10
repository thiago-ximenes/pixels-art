const paletteSquares = document.querySelectorAll('.color');

paletteSquares[0].classList.add('selected');

function squareSelected(event) {
  event.target.classList.add('selected');
}

paletteSquares.addEventListener('click', squareSelected);

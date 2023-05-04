function chooseColor(box) {
  box;
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const square = document.querySelector(`.square[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  square.classList.add('active');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('active');
  console.log(this);
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('click', (e) => {
    const audio = document.querySelector(`audio[data-key="${square.getAttribute(['data-key'])}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    square.classList.add('active');
  });
});

window.addEventListener('keydown', playSound);

squares.forEach((square) => {
  square.addEventListener('transitionend', removeTransition);
});

const music = document.getElementById('bg-music');

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function toggleCarta(elemento) {
  elemento.classList.toggle('virada');
}


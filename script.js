const music = document.getElementById('bg-music');

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function toggleCarta(elemento) {
  const cartas = document.querySelectorAll('.carta');

  // Se a carta já está em destaque, remova o destaque
  if (elemento.classList.contains('destaque')) {
    elemento.classList.remove('destaque');
    elemento.classList.remove('virada');
    return;
  }

  // Remove destaque e virada de outras cartas
  cartas.forEach(carta => {
    carta.classList.remove('destaque');
    carta.classList.remove('virada');
  });

  // Adiciona destaque e vira a carta clicada
  elemento.classList.add('destaque');
  elemento.classList.add('virada');
}

document.getElementById('enter-btn').addEventListener('click', function() {
  document.getElementById('intro').style.display = 'none';
});



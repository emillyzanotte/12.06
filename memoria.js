const tabuleiro = document.querySelector('.tabuleiro');
const cartas = Array.from(document.querySelectorAll('.carta'));

let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;
let paresEncontrados = 0;

// Função para embaralhar as cartas no tabuleiro
function embaralharCartas() {
  cartas.sort(() => 0.5 - Math.random());
  cartas.forEach(carta => tabuleiro.appendChild(carta));
}

embaralharCartas();

cartas.forEach(carta => {
  carta.addEventListener('click', virarCarta);
});

function virarCarta() {
  if (bloqueado || this === primeiraCarta || this.classList.contains('flipped')) return;

  this.classList.add('flipped');

  if (!primeiraCarta) {
    primeiraCarta = this;
  } else {
    segundaCarta = this;
    bloqueado = true;
    checarMatch();
  }
}

function checarMatch() {
  const match = primeiraCarta.dataset.id === segundaCarta.dataset.id;

  if (match) {
    paresEncontrados++;
    resetarJogada();

    if (paresEncontrados === 8) {
      explosaoBaloes(40);
      setTimeout(() => alert('Parabéns! Você encontrou todos os pares! 💖'), 1500);
    }

  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove('flipped');
      segundaCarta.classList.remove('flipped');
      resetarJogada();
    }, 1000);
  }
}

function resetarJogada() {
  primeiraCarta = null;
  segundaCarta = null;
  bloqueado = false;
}

function criarBalao() {
  const balao = document.createElement('div');
  balao.classList.add('balao');
  const cores = ['#ff4c75', '#ff9aa2', '#ff6f91', '#ff9671', '#f9f871', '#9ee493', '#61c0bf', '#00b894'];
  balao.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
  balao.style.left = Math.random() * 100 + 'vw';
  balao.style.animationDuration = 4 + Math.random() * 3 + 's';
  balao.style.animationDelay = Math.random() * 2 + 's';
  document.getElementById('explosao-baloes').appendChild(balao);
  balao.addEventListener('animationend', () => balao.remove());
}

function explosaoBaloes(qtd = 30) {
  for (let i = 0; i < qtd; i++) {
    setTimeout(criarBalao, i * 150);
  }
}

// Função da surpresa
function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem-surpresa");
    mensagem.classList.toggle("hidden");
}

// Corações caindo
const quantidade = 30;
for (let i = 0; i < quantidade; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.innerText = '❤️';
    document.body.appendChild(heart);
}

// Animação das cortinas
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('cortina-aberta');
    }, 1800);
});


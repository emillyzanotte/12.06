const btnSubmit = document.getElementById('btn-submit-quiz');
const quizContainer = document.getElementById('quiz-container');
const quizResultado = document.getElementById('quiz-resultado');

btnSubmit.addEventListener('click', () => {
  const perguntas = document.querySelectorAll('.quiz-pergunta');
  let pontos = 0;
  let total = perguntas.length;
  let perguntasRespondidas = 0;

  perguntas.forEach(pergunta => {
    const respostaSelecionada = pergunta.querySelector(`input[name="${pergunta.querySelector('input').name}"]:checked`);
    if (respostaSelecionada) {
      perguntasRespondidas++;
      const resposta = respostaSelecionada.value;

      // Verificar respostas corretas
      const respostaCorreta =
        (pergunta.id === "pergunta1" && resposta === "31.09") ||
        (pergunta.id === "pergunta2" && resposta === "jogar e não me responder") ||
        (pergunta.id === "pergunta3" && resposta === "comédia");

      if (respostaCorreta) {
        pontos++;
      }
    }
  });

  if (perguntasRespondidas < total) {
    alert('Por favor, responda todas as perguntas!');
    return;
  }

  quizContainer.style.display = 'none';
  quizResultado.style.display = 'block';

  let mensagem = '';
  if (pontos === total) {
    mensagem = `Você me conhece perfeitamente! ❤️ ${pontos}/${total} pontos!`;
  } else if (pontos >= total / 2) {
    mensagem = `Quase lá! Você me conhece bem. 💕 ${pontos}/${total} pontos.`;
  } else {
    mensagem = `Ainda temos muito para descobrir juntos! 😘 ${pontos}/${total} pontos.`;
  }

  quizResultado.textContent = mensagem;
});

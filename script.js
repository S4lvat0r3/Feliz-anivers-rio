// Botão de "Feliz Aniversário"
const birthdayBtn = document.getElementById('birthdayBtn');
const message = document.getElementById('message');
const confettiContainer = document.getElementById('confetti-container');
const videoContainer = document.getElementById('video-container');
const youtubeVideo = document.getElementById('youtubeVideo');

// Ao clicar no botão
birthdayBtn.addEventListener('click', function () {
    message.textContent = 'Feliz Aniversário, Pai!';
    startConfetti();
    
    // Exibe o vídeo engraçado
    youtubeVideo.src = "https://www.youtube.com/embed/tShUzHs_oFY&ab_channel=ANE";
    videoContainer.style.display = 'block';
});

// Função para criar confetes
function startConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);

        // Remove confetes após 3 segundos
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Função para gerar cores aleatórias
function getRandomColor() {
    const colors = ['#ff6961', '#77dd77', '#fdfd96', '#84b6f4', '#fdcae1'];
    return colors[Math.floor(Math.random() * colors.length)];
}

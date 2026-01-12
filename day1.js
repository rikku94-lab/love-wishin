const heartsContainer = document.querySelector('.hearts');
const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

const colors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff'];

// Surprise button
surpriseBtn.addEventListener('click', () => {
    surprise.style.display = 'block';
    surpriseBtn.style.display = 'none';
    startConfetti();
});

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        setTimeout(createConfetti, i * 20);
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Floating hearts
function createHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

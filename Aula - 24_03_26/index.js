// index.js - comportamentos da página principal (Aula - 24_03_26)

document.addEventListener('DOMContentLoaded', function () {
    const exercicioBtn = document.getElementById('exercicio-btn');
    const exercicioText = document.getElementById('exercicio-text');

    if (exercicioBtn && exercicioText) {
        exercicioBtn.addEventListener('click', function () {
            const cor = exercicioText.style.color;
            exercicioText.style.color = (cor === 'red') ? 'black' : 'red';
        });
    }
});

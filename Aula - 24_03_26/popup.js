// popup.js - script para popup.html (Aula - 24_03_26)

document.addEventListener('DOMContentLoaded', function () {
    const btnMostrar = document.getElementById('btnMostrar');
    if (!btnMostrar) return;

    btnMostrar.addEventListener('click', function () {
        const nomeInput = document.getElementById('nome');
        const nome = nomeInput ? nomeInput.value.trim() : '';
        if (!nome) {
            alert('Por favor, digite seu nome.');
            return;
        }
        alert(`Bem-vindo, ${nome}!`);
    });
});


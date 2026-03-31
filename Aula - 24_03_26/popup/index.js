document.addEventListener('DOMContentLoaded', function () {
    var btnMostrar = document.getElementById('btnMostrar');
    if (!btnMostrar) return;
    btnMostrar.addEventListener('click', function () {
        var nomeInput = document.getElementById('nome');
        var nome = nomeInput ? nomeInput.value.trim() : '';
        if (!nome) return alert('Por favor, digite seu nome.');
        alert('Bem-vindo, ' + nome + '!');
    });
});

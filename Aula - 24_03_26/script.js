function mudarCor() {
    cor = document.getElementById('exercicio-text').style.color;
    if (cor === 'black') {
        document.getElementById('exercicio-text').style.color = 'red';
    } else {
        document.getElementById('exercicio-text').style.color = 'black';
    }
}

document.getElementById('exercicio-btn').addEventListener('click', mudarCor);

function exibirMensagem(nome) {
    if (!nome || nome.trim().length === 0) {
        alert('Por favor, digite seu nome.');
        return;
    }
    alert(`Bem-vindo, ${nome}!`);
}

document.getElementById('btnMostrar').addEventListener('click', function () {
    var nomeInput = document.getElementById('nome');
    var nome = nomeInput ? nomeInput.value : '';
    exibirMensagem(nome);
});
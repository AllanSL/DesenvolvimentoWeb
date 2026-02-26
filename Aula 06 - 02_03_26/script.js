// script.js - Aula 06
// Arquivo de exemplo para scripts JavaScript

function trocarCor() {
    var p = document.getElementById('paragrafo4');
    if (p) {
        p.style.color = (p.style.color === 'red') ? 'black' : 'red';
    }
}

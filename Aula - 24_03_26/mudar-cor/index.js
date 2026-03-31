document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('exercicio-btn');
    var el = document.getElementById('exercicio-text');
    if (!btn || !el) return;
    btn.addEventListener('click', function () {
        el.style.color = (el.style.color === 'red') ? 'black' : 'red';
    });
});

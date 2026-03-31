function calcular() {
    const v1 = parseFloat(document.getElementById('valor1').value);
    const v2 = parseFloat(document.getElementById('valor2').value);
    const op = document.getElementById('operacao').value;
    let resultado;
    if (isNaN(v1) || isNaN(v2)) {
        alert('Por favor, preencha os dois valores!');
        return;
    }
    switch(op) {
        case 'soma': resultado = v1 + v2; break;
        case 'subtracao': resultado = v1 - v2; break;
        case 'multiplicacao': resultado = v1 * v2; break;
        case 'divisao':
            if (v2 === 0) {
                alert('Erro: Divisão por zero!');
                return;
            }
            resultado = v1 / v2; break;
        default: alert('Operação inválida!'); return;
    }
    alert('Resultado: ' + resultado);
}

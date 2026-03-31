// script.js - Lógica da calculadora visual

let operacaoAtual = null;
let valor1 = null;
let aguardandoNovoNumero = false;
let display = document.getElementById('display');

function getSimboloOperacao(op) {
    switch (op) {
        case 'soma': return ' + ';
        case 'subtracao': return ' − ';
        case 'multiplicacao': return ' × ';
        case 'divisao': return ' ÷ ';
        default: return '';
    }
}

function adicionarNumero(num) {
    if (aguardandoNovoNumero) {
        display.value += num;
    } else if (display.value === '0' && num !== '.') {
        display.value = num;
    } else if (num === '.' && display.value.split(/\+|−|×|÷/).pop().includes('.')) {
        return;
    } else {
        display.value += num;
    }
    aguardandoNovoNumero = true;
}

function selecionarOperacao(op) {
    if (!aguardandoNovoNumero && display.value !== '0') {
        // Permite trocar operação se já existe
        display.value = display.value.replace(/ [\+−×÷] $/, getSimboloOperacao(op));
        operacaoAtual = op;
        return;
    }
    if (operacaoAtual !== null) return; // Só permite uma operação por vez
    valor1 = parseFloat(display.value);
    operacaoAtual = op;
    display.value += getSimboloOperacao(op);
    aguardandoNovoNumero = false;
}

function calcular() {
    if (operacaoAtual === null || valor1 === null) return;
    const partes = display.value.split(/ [\+−×÷] /);
    if (partes.length < 2) return;
    const valor2 = parseFloat(partes[1]);
    let resultado;
    try {
        switch (operacaoAtual) {
            case 'soma':
                resultado = valor1 + valor2;
                break;
            case 'subtracao':
                resultado = valor1 - valor2;
                break;
            case 'multiplicacao':
                resultado = valor1 * valor2;
                break;
            case 'divisao':
                if (valor2 === 0) {
                    alert('Erro: Divisão por zero!');
                    limpar();
                    return;
                }
                resultado = valor1 / valor2;
                break;
            default:
                return;
        }
        display.value = resultado.toFixed(2);
        valor1 = null;
        operacaoAtual = null;
        aguardandoNovoNumero = false;
    } catch (erro) {
        alert('Erro no cálculo: ' + erro.message);
        limpar();
    }
}

function limpar() {
    display.value = '0';
    valor1 = null;
    operacaoAtual = null;
    aguardandoNovoNumero = false;
}

function deletarUltimo() {
    if (display.value.length === 1) {
        display.value = '0';
    } else {
        display.value = display.value.slice(0, -1);
    }
}

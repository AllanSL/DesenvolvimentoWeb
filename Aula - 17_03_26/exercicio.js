// Exercicio 1: Escrever um programa que verifica se um aluno foi aprovado ou reprovado com base em sua média. MEDIA >= 6
// Gerar notas aleatórias entre 0 e 10 usando a função Math.random() e multiplicando por 10
// Adicional, incluir "Recuperação" para médias entre 5 e 6
function gerarNota() {
    return Math.random() * 10;
}

// Atribuir as notas, calcular a média e exibir o resultado
let n1 = gerarNota();
let n2 = gerarNota();

// Calcular a média
let media = (n1 + n2) / 2;

// Exibir a média e o resultado (aprovado ou reprovado)
if (media >= 6) {
    console.log("Aprovado com média: " + media.toFixed(2));
} else if (media >= 5) {
    console.log("Recuperação com média: " + media.toFixed(2));
} else {
    console.log("Reprovado com média: " + media.toFixed(2));
}
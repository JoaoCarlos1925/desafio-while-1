// Seleciona o elemento div onde a soma será exibida
const outputDiv = document.getElementById('output');

function calcularSoma() {
    let soma = 0;
    let i = 1;
    while (i <= 10) {
        soma += i;
        i++;
    }
    // Exibe o resultado no elemento div
    outputDiv.textContent = 'A soma dos números de 1 a 10 é: ' + soma;
}

// Chama a função para calcular e exibir a soma
calcularSoma();
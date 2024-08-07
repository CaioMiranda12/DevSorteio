const button = document.querySelector('button')

function generateNumber(){
    const min = Math.ceil(document.querySelector('.min').value)
    const max = Math.floor(document.querySelector('.max').value)
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');

    if (isNaN(min) || isNaN(max) || min >= max) {
        resultText.textContent = 'Por favor, insira valores válidos.';
        resultContainer.style.display = 'block';
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    resultText.textContent = `Número sorteado: ${result}`;
    resultContainer.style.display = 'block';

}

document.addEventListener('DOMContentLoaded', () => {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');

    button.addEventListener('click', () => {
        if (isNaN(min) || isNaN(max) || min >= max) {
            resultText.textContent = 'Por favor, insira valores válidos.';
            resultContainer.style.display = 'block';
            return;
        }

        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        resultText.textContent = `Número sorteado: ${result}`;
        resultContainer.style.display = 'block';
    });
});


button.addEventListener('click', generateNumber)


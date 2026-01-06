const fs = require('fs');

// Lê toda a entrada do console (stdin)
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

// Primeira linha: valor do saque
const valor = parseInt(input[0]);

function calcularSaque(valorSaque) {
    if (valorSaque < 10 || valorSaque > 1000 || valorSaque % 10 !== 0) {
        return "Insira uma quantia valida";
    }

    let notas50 = Math.floor(valorSaque / 50);
    valorSaque %= 50;

    let notas20 = Math.floor(valorSaque / 20);
    valorSaque %= 20;

    let notas10 = Math.floor(valorSaque / 10);

    return `50:${notas50} 20:${notas20} 10:${notas10}`;
}

// Imprime no console
console.log(calcularSaque(valor));
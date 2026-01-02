// Entrada simulada (já que não temos gets())
let salario = 10000; // exemplo

function calcularImposto(salario) {
    let imposto = 0;

    if (salario <= 3000) {
        // 5% sobre todo o salário
        imposto = salario * 0.05;
    } else {
        // 5% sobre os primeiros 3000
        imposto = 3000 * 0.05;
        // + 10% sobre o excedente
        imposto += (salario - 3000) * 0.10;
    }

    return imposto;
}

// Chamada da função e saída
let imposto = calcularImposto(salario);
console.log("seu imposto é de " +imposto.toFixed(2));

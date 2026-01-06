// Lê o valor do saque
const valor = parseInt(gets());

// Verifica se o valor é válido
if (valor < 10 || valor > 1000 || valor % 10 !== 0) {
    print("Insira uma quantia valida");
} else {
    // Calcula notas de 50
    let notas50 = Math.floor(valor / 50);
    let resto = valor % 50;

    // Calcula notas de 20
    let notas20 = Math.floor(resto / 20);
    resto = resto % 20;

    // Calcula notas de 10
    let notas10 = Math.floor(resto / 10);

    // Exibe resultado
    print(`50:${notas50} 20:${notas20} 10:${notas10}`);
}
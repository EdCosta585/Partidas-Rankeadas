// Variáveis do herói
let NomeDoHeroi = "Malamut";   // Nome do herói
let xp = 15500;          // Nível de experiência (XP)

// Níveis de experiência
let nivel = ""

// Decisões de nivel de experiência
if (xp < 1000) {
    nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
} else if (xp >= 10001) {
    nivel = "Radiante"
}

// Saída
console.log(`O Herói de nome ${NomeDoHeroi} está no nível de ${nivel}`);
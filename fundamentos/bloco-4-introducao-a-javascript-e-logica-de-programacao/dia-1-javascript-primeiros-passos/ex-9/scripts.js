// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const a = 8;
const b = 4;
const c = 2;

let eImpar = false;

if (a % 2 === 1 || b % 2 ===1 || c % 2 ===1) {
    eImpar = true;
}

console.log(eImpar);

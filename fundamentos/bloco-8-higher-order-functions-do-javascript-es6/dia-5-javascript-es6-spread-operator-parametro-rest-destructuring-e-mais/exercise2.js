// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const soma = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

console.log (soma(32, 5))
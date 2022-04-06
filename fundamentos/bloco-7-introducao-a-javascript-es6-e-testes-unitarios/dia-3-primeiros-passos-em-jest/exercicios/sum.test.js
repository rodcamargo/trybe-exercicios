// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('./sum');

describe('Testa a função sum', () => {
  test('Deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test('Deve disparar um erro caso receba uma string como parâmetro', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('Os parâmetros devem ser números');
  })
});


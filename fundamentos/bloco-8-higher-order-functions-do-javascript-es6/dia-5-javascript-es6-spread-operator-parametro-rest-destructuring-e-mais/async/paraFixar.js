// Sobre Spread Operator:

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'mamão', 'abacaxi', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'açai', 'leite ninho'];

const fruitSalad = (fruit, additional) => {
  const fruitsAndAdd = [...fruit, ...additional];
  return fruitsAndAdd;
};

console.log(fruitSalad(specialFruit, additionalItens));
console.log(specialFruit)
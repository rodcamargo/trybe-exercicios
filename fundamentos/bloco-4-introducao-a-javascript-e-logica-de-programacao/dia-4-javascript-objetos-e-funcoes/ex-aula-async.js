// Sobre Objetos:

// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
// Copiar
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
// Copiar
// [2006, 2007, 2008, 2009, 2010, 2018]
// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};
console.log("A jogadora " + player.name + " tem " + player.age + " anos de idade.");

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");

// Sobre for / in   -  e  - - for / of:

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let individualNames in names) {
    console.log("Olá " + names[individualNames]);
}

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let keyCar in car) {
    console.log(keyCar + ": " + car[keyCar]);
};

// Exercicios do dia 4.1 - Para refatoramento:

// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)

function sum(firstNumber, secondeNumber) {
    return firstNumber + secondNumber;
}

console.log(sum(8, 3));


// Subtração (a - b)

function subtraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

console.log(subtraction(7, 9));



// Multiplicação (a * b)

function multiplicator(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiplicator(7, 8));

// Divisão (a / b)

function divisor(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

console.log(divisor(32, 4));

// Módulo (a % b)

function modulator(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
}

console.log(modulator(3, 2));

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function biggestNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return "Primeiro número é maior"
    } else if (firstNumber < secondNumber) {
        return "Segundo número é maior"
    } else {
        return "Os números são iguais"
    }
}

console.log(biggestNumber(3, 5));
console.log(biggestNumber(5, 2));
console.log(biggestNumber(7, 7));

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function bigOf3(firstNumber, secondNumber, thirdNumber) {
    let threeNumbers = [];
    let biggest = 0;
    threeNumbers.push(firstNumber, secondNumber, thirdNumber);

    for (let index = 0; index < threeNumbers.length; index += 1) {
        if (threeNumbers[index] > biggest) {
            biggest = threeNumbers[index];
        }
    } return ("O maior número é " + biggest);
}

console.log(bigOf3(3, 21, 7));

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function result(number) {
    if (number > 0) {
        return "O número é positivo";
    } else if (number < 0) {
        return "o número é negativo";
    } else {
        return "O número é igual a 0";
    }
}
console.log(result(5));
console.log(result(0));
console.log(result(-3));

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangle(firstNumber, secondNumber, thirdNumber) {

    let sumAngles = firstNumber + secondNumber + thirdNumber;
    let positiveAngles = firstNumber > 0 && secondNumber > 0 && thirdNumber > 0;

    if (positiveAngles) {
        if (sumAngles === 180) {
            return "True";
        } else {
            return "False";
        }
    } else {
        return "Erro, valores inválidos";
    }
}
console.log(triangle(60, 90, 30));
console.log(triangle(60, 90, 10));
console.log(triangle(60, 90, -30));
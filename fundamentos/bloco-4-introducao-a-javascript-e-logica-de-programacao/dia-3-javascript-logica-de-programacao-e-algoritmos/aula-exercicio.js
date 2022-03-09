// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let soma = 0;

for (let index = 1; index <= 50; index += 1) {
    soma += index;
}
console.log("A soma de 1 a 50 é: " + soma);


//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let div3 = 0;

 for (index = 2; index <= 150; index += 1) {
    if(index % 3 === 0) {
        div3 += 1;
    }
 }

 if(div3 === 50) {
    console.log ("Seu computador irá explodir em 50 segundos!!!")
    }

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "pedra";
let player2 = "papel";

switch (player1) {
    case "pedra": 
        if(player2 === "pedra"){
            console.log("A tie");
        } else if(player2 === "papel"){
            console.log("Player 2 won");
        } else {
            confirm.log("Player 1 won");
        }
        break;

    case "papel":
        if(player2 === "pedra"){
            console.log("Player 1 won");
        } else if(player2 === "papel"){
            console.log("A Tie");
        } else {
            confirm.log("Player 2 won");
        }
        break;
    
    case "tesoura":
        if(player2 === "pedra"){
            console.log("Player 2 won");
        } else if(player2 === "papel"){
            console.log("Player 1 won");
        } else {
            confirm.log("A Tie");
        }
        break;
}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idade = 28;
if(idade >= 18) {
    console.log("A pessoa é maior de idade");
}

//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let manu = 22;
let ana = 18;
let ronald = 28;

if(manu < ana && manu < ronald){
    console.log("Manu é a pessoa mais nova");
}else if(ana < manu && ana < ronald){
    console.log("Ana é a pessoa mais nova");
}else {
    console.log("Ronald é a pessoa mais nova");
}
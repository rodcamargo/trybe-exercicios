// 1. Crie um irmão para elementoOndeVoceEsta .

 let container = document.getElementById('pai');
 let newSec = document.createElement('section');
 newSec.id = 'quintoFilho';
 container.appendChild(newSec);

// 2. Crie um filho para elementoOndeVoceEsta .

let containerEstou = document.getElementById('elementoOndeVoceEsta');
let filhoOndeEstou = document.createElement('section');
filhoOndeEstou.id = 'FilhoDeOndeEstou';
containerEstou.appendChild(filhoOndeEstou);

// 3. Crie um filho para primeiroFilhoDoFilho .

let containerNeto = document.getElementById('primeiroFilhoDoFilho');
let bisneto = document.createElement('section');
bisneto.id = 'BisnetoOuFilhodoPrimeiroFilho';
containerNeto.appendChild(bisneto);

// 4. A partir desse filho criado, acesse terceiroFilho .
let localMain = document.getElementById('PaiDoPai');
let local = document.querySelector('#BisnetoOuFilhodoPrimeiroFilho');
local.parentNode.parentNode.nextElementSibling


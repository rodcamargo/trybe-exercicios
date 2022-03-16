// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let pai = document.getElementById('pai');

for (let index = 0; index < pai.length; index += 1) {
  let element = pai.childNodes[index]
  if (element.id !== 'elementoOndeVoceEsta') {
    element.remove();
  }
}

console.log(pai)
// const pai = document.getElementById('pai');

// for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
//   const currentChildren = pai.childNodes[index];
//   if (currentChildren.id !== 'elementoOndeVoceEsta') {
//     currentChildren.remove();
//   }
// }
// console.log(pai)
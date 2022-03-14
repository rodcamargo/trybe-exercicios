let background1 = document.getElementsByTagName('h1')[0];
background1.style.backgroundColor = 'green';
background1.style.color = 'white'
background1.style.padding = '20px';

let background2 = document.getElementsByClassName('emergency-tasks')[0];
background2.style.backgroundColor = 'orange';
background2.style.color = 'white'

let background3 = document.getElementsByClassName('no-emergency-tasks')[0];
background3.style.backgroundColor = 'rgb(250, 200, 100)';
background3.style.color = 'white'

let elementsH3 = document.getElementsByTagName('h3');
elementsH3[0].style.backgroundColor = 'rgb(218, 60, 223)';
elementsH3[0].style.color = 'white';
elementsH3[1].style.backgroundColor = 'rgb(218, 60, 223)';
elementsH3[1].style.color = 'white';
elementsH3[2].style.backgroundColor = 'black';
elementsH3[2].style.color = 'white';
elementsH3[3].style.backgroundColor = 'black';
elementsH3[3].style.color = 'white';

let footerAt = document.getElementsByTagName('footer');
footerAt[0].style.backgroundColor = 'green';
footerAt[0].style.color = 'white';

let footerText = document.getElementById('footer-container');
footerText.innerText = "Fazendo Teste";



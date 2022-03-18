function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criarCalendario() {

  let calendarioUL = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dia = dezDaysList[index];
    let calendarioDia = document.createElement('li');
    calendarioDia.innerHTML = dia; // poderia utilizar direto o dezDaysList[index]
    calendarioUL.appendChild(calendarioDia);

    if (dia == 24 || dia == 31) {
      calendarioDia.className = ('day holiday');
    } else if (dia == 4 || dia == 11 || dia == 18) {
      calendarioDia.className = ('day friday');
    } else if (dia == 25) {
      calendarioDia.className = ('day friday holiday');
    } else {
      calendarioDia.className = ('day');
    }
  }
}
criarCalendario()

// 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function buttonFeriados() {
  let newButton = document.createElement('button');
  newButton.innerText = 'Feriados';
  newButton.id = 'btn-holiday';
  let divButton = document.getElementsByClassName('buttons-container')[0]; // queria saber pq tive que declarar a posição [0]
  divButton.appendChild(newButton);
}
buttonFeriados()

// 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function colorFeriados() {
  let btnFeriados = document.getElementById('btn-holiday')
  let feriados = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)'

  btnFeriados.addEventListener('click', function () {
    for (index = 0; index < feriados.length; index += 1) {
      if (feriados[index].style.backgroundColor !== 'yellow') {
        feriados[index].style.backgroundColor = 'yellow'
      }
      else {
        feriados[index].style.backgroundColor = backgroundColor;
      }
    }
  })
}
colorFeriados()

// 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function buttonFriday() {
  let newButton = document.createElement('button');
  newButton.innerText = 'Sexta-feira'
  newButton.id = 'btn-friday';
  let divButtonsContainer = document.getElementsByClassName('buttons-container')[0];
  divButtonsContainer.appendChild(newButton);
}
buttonFriday()

// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function textFridays(fridayArray) {
  let btnFridays = document.getElementById('btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let fridayText = 'Sextou!'


  btnFridays.addEventListener('click', function () {
    for (index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== fridayText) {
        fridays[index].innerHTML = fridayText;
      }
      else {
        fridays[index].innerHTML = fridayArray[index];
      }
    }
  })
}
let fridaysDez = [4, 11, 18, 25];
textFridays(fridaysDez)

// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomDay() {
  let days = document.getElementById('days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '500';
  })
};
zoomDay()

function zoomOutDay() {
  let days = document.getElementById('days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}
zoomOutDay()

// 7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addTarefas (tarefa) {
  
  let divTarefas = document.querySelector('.my-tasks');
  let qualTarefa = document.createElement('span');
  qualTarefa.innerHTML = tarefa

  divTarefas.appendChild(qualTarefa);
}
addTarefas('Estudar Javascript')

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .


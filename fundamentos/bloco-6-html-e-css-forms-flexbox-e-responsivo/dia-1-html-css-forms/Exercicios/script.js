const btnSubmit = document.getElementById('btn-submit');
const forms = document.getElementById('forms');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const permission = document.getElementById('permission')

btnSubmit.addEventListener('click', function (event) {
  if (fullName.value.length < 10 || fullName.length > 40) {
    window.alert('Dados Inválidos');
  }
  else if (email.value.length < 10 || email.length > 50) {
    window.alert('Dados Inválidos');
  } 
  else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
  // event.preventDefault();
});

// const btnSubmit = document.getElementById('btn-submit');
// const forms = document.getElementById('forms');
// const fullName = document.getElementById('full-name');
// const email = document.getElementById('email');
// const permission = document.getElementById('permission')

// btnSubmit.addEventListener('click', function (event) {
//   if (fullName.value.length < 10 || fullName.length > 40) {
//     window.alert('Dados Inválidos');
//   }
//   else if (email.value.length < 10 || email.length > 50) {
//     window.alert('Dados Inválidos');
//   } 
//   else {
//     window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
//   }
//   // event.preventDefault();
// });
const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});
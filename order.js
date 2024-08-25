const TOKEN = '';
const CHAT_ID = '';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const getCheckedCheckBoxes = function() {
  const checkboxes = document.getElementsByClassName('drinked');
  const checkboxesChecked = [];
  for (var index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value);
    }
  }
  return checkboxesChecked;
}



document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  let message = 'Заявка с сайта\n' + 'Имя:' + this.name.value + '\n' + 
  'Играл ли в show today: ' + this.visit.value + '\n' + 
  'Предпочтения по напиткам: ' + getCheckedCheckBoxes() ;

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  }) 
  .then(() => {
    alert('Сообщение доставлено');
  })
  .catch((err) => {
    console.warn(err)
  })
  .finally(() => {
    console.log('Скрипт выполнен');
  })
})
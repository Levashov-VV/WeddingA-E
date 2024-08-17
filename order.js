const TOKEN = '';
const CHAT_ID = "";
const URL_API = `https://api.telegram.org/bot$​{ TOKEN }/sendMessage`;

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  let message = 'Заявка с сайта\n' + 'Имя:' + this.name.value + '\n' + 
  'Играли ли в игру: ' + this.visit.value + '\n' + 
  'Буду(будем) пить: ' + this.drink.value;

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  }) 
  .then((res) => {
    alert('Сообщение доставлено');
  })
  .catch((err) => {
    console.warn(err)
  })
  .finally(() => {
    console.log('Скрипт выполнен');
  })
})
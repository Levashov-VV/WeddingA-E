<?php

$name = $_POST['name'];
$visit = $_POST['visit'];
$drink = $_POST['drink'];
$token = "";
$chat_id = "";
$arr = array(
    'Имя гостя: ' => $name,
    'Играл ли в игру: ' => $visit,
    'Что будет пить:' => $drink
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
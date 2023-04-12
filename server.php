<?php
//trasformo file json in una stringa
$todo = file_get_contents(__DIR__ . '/todo.json');
$todo = json_decode($todo, true);
$todo = json_encode($todo);

//restituisco content type: json
header('Content-Type: application/json');

echo $todo;

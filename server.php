<?php
$newTodo = isset($_POST['newTodo']) ? $_POST['newTodo'] : NULL;
//trasformo file json in una stringa
$todo = file_get_contents(__DIR__ . '/todo.json');
//gestione aggiunta hotel
if ($newTodo !== NULL) {
    $todo = json_decode($todo, true);
    $todo[] = [
        "text" => $newTodo,
        "done" => false,

    ];

    $todo = json_encode($todo);
    file_put_contents(__DIR__ . '/todo.json', $todo);
}

//restituisco content type: json
header('Content-Type: application/json');

echo $todo;

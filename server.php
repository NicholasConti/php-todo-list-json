<?php
$newTodo = isset($_POST['newTodo']) ? $_POST['newTodo'] : NULL;
$indexTodo = isset($_GET['index']) ? $_GET['index'] : NULL;
//trasformo file json in una stringa
$todo = file_get_contents(__DIR__ . '/todo.json');
//aggiunta todo
if ($newTodo !== NULL) {
    $todo = json_decode($todo, true);
    $todo[] = [
        "text" => $newTodo,
        "done" => false,

    ];

    $todo = json_encode($todo);
    file_put_contents(__DIR__ . '/todo.json', $todo);
}
//toggle todo
if ($indexTodo !== NULL) {
    $todo = json_decode($todo, true);
    if ($todo[$indexTodo]['done'] === true) {
        $todo[$indexTodo]['done'] = false;
    } else {
        $todo[$indexTodo]['done'] = true;
    }
    $todo = json_encode($todo);
    file_put_contents(__DIR__ . '/todo.json', $todo);
}

//restituisco content type: json
header('Content-Type: application/json');

echo $todo;

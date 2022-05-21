<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: PUT, GET, POST, OPTIONS ");
header("Access-Control-Allow-Headers: Origin, X-Requested-Width, Content-
Type, Accept");

$connect = mysqli_connect('localhost', 'root', '', 'alumni') or die;
if ($connect) {
    echo 'Connected';
} else {
    echo "not connected";
}


$alumniFeedback = file_get_contents("php://input");
var_dump($alumniFeedback);
if (isset($alumniFeedback) && !empty($alumniFeedback)) {
    $req = json_decode($alumniFeedback);
    var_dump($req);
} else {
    echo "error occured";
}

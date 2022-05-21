<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,PUT,GET,POST,OPTIONS");
header('Access-Control-Max-Age: 1000');
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
error_reporting(0);

$connect = mysqli_connect('localhost', 'root', '', 'nitpy_facstaff') or die;
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

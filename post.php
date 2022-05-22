<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,PUT, GET, POST, OPTIONS ");
header('Access-Control-Max-Age: 1000');
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, access-control-allow-credentials, access-control-allow-headers, access-control-allow-methods");
// error_reporting(0);


$connect = mysqli_connect('localhost', 'root', '', 'alumni') or die;
if ($connect) {
    echo 'Connected';
} else {
    echo "not connected";
}


$alumniFeedback = file_get_contents("php://input");

if (isset($alumniFeedback) && !empty($alumniFeedback)) {
    $req = json_decode($alumniFeedback);



    $stuName = mysqli_real_escape_string($connect, $req->stuName);
    $orgName = mysqli_real_escape_string($connect, $req->orgName);
    $organization = implode(',', $req->organization);
    $qualifications = mysqli_real_escape_string($connect, $req->qualifications);
    $email = mysqli_real_escape_string($connect, $req->email);
    $mobile = mysqli_real_escape_string($connect, $req->mobile);
    $regNum = mysqli_real_escape_string($connect, $req->regNum);
    $q1 = $req->q1;
    $q2 = $req->q2;
    $q3 = $req->q3;
    $q4 = $req->q4;
    $q5 = $req->q5;
    $q6 = $req->q6;
    $q7 = $req->q7;
    $q8 = $req->q8;
    $q9 = $req->q9;
    $q10 = $req->q10;
    $q11 = $req->q11;
    $q12 = $req->q12;
    $q13 = $req->q13;
    $q14 = $req->q14;
    $q14b = mysqli_real_escape_string($connect, $req->q14b);
    $q15 = $req->q15;
    $q15b = mysqli_real_escape_string($connect, $req->q15b);
    $q16 = $req->q16;
    $q17 = $req->q17;
    $q18 = mysqli_real_escape_string($connect, $req->q18);



    $insertQuery = "INSERT INTO feedback (studentName,orgName,organization,qualification,email,mobile,regNum,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q14b,q15,q15b,q16,q17,q18) VALUES ('$stuName','$orgName','$organization','$qualifications','$email','$mobile','$regNum','$q1','$q2','$q3','$q4','$q5','$q6','$q7','$q8','$q9','$q10','$q11','$q12','$q13','$q14','$q14b','$q15','$q15b','$q16','$q17','$q18')";
    $check = mysqli_query($connect, $insertQuery);

    if (!$check) {
        echo (mysqli_error($connect));
    } else {

        echo '\ndone';


    }
} else {
    echo "\nerror occured";
}

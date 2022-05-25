<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,PUT, GET, POST, OPTIONS ");
header('Access-Control-Max-Age: 1000');
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, access-control-allow-credentials, access-control-allow-headers, access-control-allow-methods");
error_reporting(0);


$connect = mysqli_connect('localhost', 'root', '', 'alumni') or die;
if ($connect) {
    echo 'Connected';
} else {
    echo "not connected";
}


$alumniFeedback = json_decode(file_get_contents("php://input"));

if (isset($alumniFeedback) && !empty($alumniFeedback)) {




    $stuName = mysqli_real_escape_string($connect, $alumniFeedback->stuName);
    $orgName = mysqli_real_escape_string($connect, $alumniFeedback->orgName);
    $organization = implode(',', $alumniFeedback->organization);
    $qualifications = mysqli_real_escape_string($connect, $alumniFeedback->qualifications);
    $email = mysqli_real_escape_string($connect, $alumniFeedback->email);
    $mobile = mysqli_real_escape_string($connect, $alumniFeedback->mobile);
    $regNum = mysqli_real_escape_string($connect, $alumniFeedback->regNum);
    $q1 = $alumniFeedback->q1;
    $q2 = $alumniFeedback->q2;
    $q3 = $alumniFeedback->q3;
    $q4 = $alumniFeedback->q4;
    $q5 = $alumniFeedback->q5;
    $q6 = $alumniFeedback->q6;
    $q7 = $alumniFeedback->q7;
    $q8 = $alumniFeedback->q8;
    $q9 = $alumniFeedback->q9;
    $q10 = $alumniFeedback->q10;
    $q11 = $alumniFeedback->q11;
    $q12 = $alumniFeedback->q12;
    $q13 = $alumniFeedback->q13;
    $q14 = $alumniFeedback->q14;
    $q14b = mysqli_real_escape_string($connect, $alumniFeedback->q14b);
    $q15 = $alumniFeedback->q15;
    $q15b = mysqli_real_escape_string($connect, $alumniFeedback->q15b);
    $q16 = $alumniFeedback->q16;
    $q17 = $alumniFeedback->q17;
    $q18 = mysqli_real_escape_string($connect, $alumniFeedback->q18);



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

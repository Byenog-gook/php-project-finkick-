<?php
session_start();

// 강제적으로 캐시 무효화(서버와 클라이언트간의 동적인 html 생성을 위해)
header('Cache-Control: no-cache, must-revalidate');
// 날짜와 시간을 포맷 형식에 따라 포맷
header('Expires: '.gmdate('D, d M Y H:i:s', time()).' GMT');
// json 전송, 문자열을 utf-8로 변경
header('Content-type: application/json; charset=utf-8');

$idValue = $_POST["id"];
$passWordValue = $_POST["password"];

$url = "http://test.api.finkick.xyz/api/auth/login";
$data = array("id" => $idValue, "password" => $passWordValue, "type" => "web");
                                                    

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json', 'Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$result = curl_exec($ch);
echo $result;

$error = curl_error($ch);
if(is_null($error)){
    var_dump($error);
} else { // 아마도 에러가없다면 ELSE 구문이 실행될테고 파싱한 JSON 객체 데이터를 세션값 저장에 활용한다.
    $pharse_result = json_decode($result);
    $_SESSION["accountnum"] = $pharse_result->result_data->account->num;
    $_SESSION["userId"] = $pharse_result->result_data->account->id;
    $_SESSION["userType"] = $pharse_result->result_data->account->type;

    switch ($_SESSION["userType"]) {

        //고객 아이디
        case 'M':
            $_SESSION["userType"] = '회원';
            break;
        
        //관리자 아이디
        case 'A':
            $_SESSION["userType"] = '관리자';
            break;
            
        //관리자 아이디
        case 'O':
            $_SESSION["userType"] = '운영자';
            break;
    }
}

curl_close ($ch);

?>
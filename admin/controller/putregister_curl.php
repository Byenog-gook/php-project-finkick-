<?php
// 강제적으로 캐시 무효화(서버와 클라이언트간의 동적인 html 생성을 위해)
header('Cache-Control: no-cache, must-revalidate');
// 날짜와 시간을 포맷 형식에 따라 포맷
header('Expires: '.gmdate('D, d M Y H:i:s', time()).' GMT');
// json 전송, 문자열을 utf-8로 변경
header('Content-type: application/json; charset=utf-8');

$id = $_POST["id"]; // 아이디 값
$password = $_POST["pw"]; // 비밀번호 값
$phone = $_POST["phone"]; // 휴대폰 값

$url = "http://test.api.finkick.xyz/api/account";
$data = array("id" => $id, "password" => $password, "phoneNumber" => $phone);

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
} 

curl_close ($ch);


?>

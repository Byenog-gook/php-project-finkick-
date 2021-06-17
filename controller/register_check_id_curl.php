<?php
/**
 * 본 파일은 signup.php 의 중복 버튼이 눌리면 호출 되며,
 * 사용자가 입력한 form태그의 id값을 api 서버에 전송하여 중복 체크를하며
 * type : N (신규가입) , type : P (비밀번호 찾기)
 * 에러 결과를 json형식으로 반환함
 */

 // 강제적으로 캐시 무효화(서버와 클라이언트간의 동적인 html 생성을 위해)
 header('Cache-Control: no-cache, must-revalidate');
 // 날짜와 시간을 포맷 형식에 따라 포맷
 header('Expires: '.gmdate('D, d M Y H:i:s', time()).' GMT');
 // json 전송, 문자열을 utf-8로 변경
 header('Content-type: application/json; charset=utf-8');

 //FORM 태그에 사용자가 입력한 이메일 값 POST 방식으로 가져오기
 $id = $_POST["id"];

$url = "http://test.api.finkick.xyz/api/auth/email";
$data = array("type" => "N", "email" => $id);

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
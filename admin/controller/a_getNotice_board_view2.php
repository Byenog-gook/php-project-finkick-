<?php
// db 라이브러리 포함
require_once "../app.php";

// 강제적으로 캐시 무효화(서버와 클라이언트간의 동적인 html 생성을 위해)
header('Cache-Control: no-cache, must-revalidate');
// 날짜와 시간을 포맷 형식에 따라 포맷
header('Expires: ' . gmdate('D, d M Y H:i:s', time()) . ' GMT');
// json 전송, 문자열을 utf-8로 변경
header('Content-type: application/json; charset=utf-8');

// get방식으로 글 번호를 가져옴
$num = $_GET['num'];


//board테이블에서 num 에 해당하는 레코드를 가져옴.
//WHERE num = $num
$db->where('num', $num);
//SELECT * FROM board WHERE num = $ num
$result = $db->getOne('notice');

//sql질의 후 반환된 레코드를 result 배열에 저장
$result['result_data'] = $result;
$result['error'] = false;

echo json_encode($result);


//본 파일은 notice_board_edit.php파일에서
//수정할 게시글의 데이터를 불러와주는 역할을 합니다.
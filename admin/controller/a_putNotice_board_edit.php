<?php
// db와의 연동을 위해 app.php (같은 파일을 한번만) 포함
require_once "../app.php";

/**
 * 본 파일은 notice_board_edit.php 의 수정 버튼이 눌리면 호출 되며,
 * 입력받은 값을 db의 board 테이블에 UPDATE하는 기능을 가지며,
 * 에러 결과를 json형식으로 반환함
 */

// 강제적으로 캐시 무효화(서버와 클라이언트간의 동적인 html 생성을 위해)
header('Cache-Control: no-cache, must-revalidate');
// 날짜와 시간을 포맷 형식에 따라 포맷
header('Expires: '.gmdate('D, d M Y H:i:s', time()).' GMT');
// json 전송, 문자열을 utf-8로 변경
header('Content-type: application/json; charset=utf-8');

// putNotice_board_edit.php는 Board 테이블에 수정된 게시판 글을 수정(업데이트)하는 기능을 담당
$num = $_POST["editboardnum"];
$title = $_POST["title"];
$content = $_POST["content"];

//객체를 하나 생성한 뒤, post방식으로 받은 데이터를 객체의 키, 값으로 저장
$data = Array (
     "title" => $title,
     "content" => $content
);

// array_filter() 함수는 객체의 프로퍼티의 키에 값이 없다면 프로퍼티를 제거해버림
$data = array_filter($data);

// $db->where('id', $id);
$db->where('num', $num);
// sql UPDATE 구문 실행

if ($db->update('notice',$data)) {
    $result['error'] = false;
    $result['msg'] = $data;

} else {
    $result['error'] = true;
    $result['msg'] = $data;
}


// json 형식으로 반환하기 위해 인코딩
echo json_encode($result);

<?php
// db와의 연동을 위해 app.php (같은 파일을 한번만) 포함
require_once "../app.php";

/**
 * 본 파일은 notice_board.php의 글 저장하기 버튼이 눌리면 호출되며,
 * 넘겨받은 값을 db에 INSERT 시키고, 에러 결과를
 * json형식으로 인코딩하여 반환하는 기능을 함
 */

// ★ 헤더파일을 선언하지 않을시 ajax 통신 오류 발생할수 있으니 주의! ★ 

// 강제적으로 캐시 무효화(서버와 클라이언트간의 동적인 html 생성을 위해)
header('Cache-Control: no-cache, must-revalidate');
// 날짜와 시간을 포맷 형식에 따라 포맷
header('Expires: '.gmdate('D, d M Y H:i:s', time()).' GMT');
// json 전송, 문자열을 utf-8로 변경
header('Content-type: application/json; charset=utf-8');


// MVC 아키텍처의 Model은 DB서버와의 데이터 출력, 입력, 삭제, 수정의 기능을 담당한다.
// putNotice_board.php는 board 테이블에 게시글을 입력하는 기능을 담당

$inquire_num = $_POST["inquirenum"]; //답변할 문의 게시글 번호
$accountnum = $_POST["accountnum"]; //회원번호
$responseContent = $_POST["content"]; // 내용


$data = Array (
    "responseNum" => $accountnum,
    "responseContent" => $responseContent,
      // sql구문 select now() 와 같음
    // 현재 날짜 및 시간을 반환함
    // 날짜 형식 ex)  2021-01-17 15:19:49
    "responseDate" => $db->now()
);

//array_filter는 배열에 존재하는 모든 값들에 대해 사용자정의함수로 필터링을 하여 통과한 값을 가지고
//새로운 배열을 만드는 함수 입니다.

$data = array_filter($data);

// $db->where('id', $id);
$db->where('num', $inquire_num);
// sql UPDATE 구문 실행

if ($db->update('inquire',$data)) {
    $result['error'] = false;
    $result['msg'] = $data;
} else {
    $result['error'] = true;
    $result['msg'] = $data;
}


// json 형식으로 반환하기 위해 인코딩
echo json_encode($result);
//위의 코드를 sql문으로 나타내면 다음과 같음.
//INSERT INTO board (num, name, email, pass, title, content, wdate, ip, view) VALUES 
//('$num', '$name', '$email', '$pass', '$title', '$content', 'now()', '$REMOTE_ADDR', 0);

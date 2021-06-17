let urlParams;
//async를 사용하면 지역변수개념을 전역변수로 사용할수있음!

// 스크립트가 준비되면 호출되는 함수
$(document).ready(function () {
  urlParams = getUrlParams();
  $.ajax({
    // getMember.php와 통신
    url: "./controller/a_getNotice_board_view.php",
    type: "GET",
    // 받는 형식은 json 형식
    data: {
      "num": urlParams.num
    },
    dataType: "json",
    cache: false,
    async: false,
    // 실패시 호출되는 함수
    error: function (request, status, error) {
      alert(
        "code = " +
        request.status +
        " message = " +
        request.responseText +
        " error = " +
        error
      );
    },
    // 성공시 호출되는 함수
    success: function (response) {
      // console.log(response);
      // class가 reFresh2인 태그 초기화
      $(".reFresh2").html("");

      var div = "";

      if (response["error"]) {
        alert(response["msg"]);
      } else {
        div += "<div class='col-md-11 mb-4'>";
        div += "<input type='hidden' class='form-control' id='editboardnum' name='editboardnum' value='"+ urlParams.num +"'></input>"
        div += "</div>";
        div += "<div class='col-md-11 mb-4'>";
        div += "<label for='pass' class='form-label'>제목</label>";
        div += "<input type='text' class='form-control' id='title' name='title' value='" + response["result_data"]["title"] + "'>";
        div += "</div>";
        div += "<div class='col-md-11 mb-4'>";
        div += "<div class='form-floating'>";
        div += "<label for='Textarea'>내용</label>";
        div += "<textarea class='form-control' name='content' id='Textarea' value='" + response["result_data"]["content"] + "'></textarea>";
        div += "</div>";
        div += "<br>";
        div += "<div class='btn-group' role='group' aria-label='Basic mixed styles example'>";
        div += "<button type='button' class='btn btn-dark' onclick='EditBoardCheckInput()'>글 저장하기</button>";
        div += "<button type='reset' class='btn btn-dark'>다시 쓰기</button>";
        div += "<button type='button' class='btn btn-dark' onclick='history.back(-1)'>되돌아가기</button>";
        div += "</div>";
        div += "</div>";
      }

      // 태그 출력
      $(".reFresh2").html(div);
    },
    // 완료시 호출되는 함수
    complete: function () {},
  }); // end ajax
});

//사용자가 엔터키를 입력시 enter 함수 실행
function enter() {
  //Javascript 로 사용자의 키입력을 감지하여 함수를 처리할 수 있습니다.
  // window.event.keyCode는 아스키코드 기반이다.
  // window 객체의 이벤트는 언제든지 접근이 가능하다.
  // window.event.keyCode == 13 이라는 뜻은 Enter를 뜻함.
  if (window.event.keyCode == 13) {
    //사용자가 엔터키를 입력하면 signCheck(); 함수를 실행합니다.
    EditBoardCheckInput();
  }
}

// url 주소의 쿼리 스트링을 들고오기 위한 함수
function getUrlParams() {
  var params = {};
  window.location.search.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (str, key, value) {
      params[key] = value;
    }
  );
  return params;
}

//글 저장하기 버튼 입력이나 사용자가 엔터키 입력시 호출되는 함수
function EditBoardCheckInput() {
  // 자바스크립트에서는 데이터 타입을 자동으로 선언해주지만. typeof 연산자를 사용하면 변수의 데이터 타입을 반환한다.
  //input 태그의 사용자가 입력한 값들은 모두 string형으로 저장된다.

  //사용자가 입력한 form 태그의 내부 데이터를 추출

  //var과 let의 차이

  //var은 변수 재선언이 가능하지만 let은 변수 재선언이 불가능하다.
  //재할당은 가능함.

  //https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90
  let title = document.notice_boardForm.title;
  let content = document.notice_boardForm.content;

  if (title.value === "") {
    alert("제목을 입력해주세요!!!");
    title.focus();
    return;
  }

  if (content.value === "") {
    alert("내용을 입력해주세요!!!");
    content.focus();
    return;
  }

    $.ajax({
      url: "./controller/a_putNotice_board_edit.php",
      type: "POST",
      // form태그에 값을 직렬화하여 putMemberModify.php로 전달
      data: $("#notice_boardForm").serialize(),
      // 받는 형식은 json 형식
      dataType: "json",
      cache: false,
      error: function (request, status, error) {
        alert(
          "code:" +
          request.status +
          "\n" +
          "message:" +
          request.responseText +
          "\n" +
          "error:" +
          error
        );
        console.log("서버와 연결에 실패했습니다...");
      },
      // ajax 연결에 성공했다면, putMemberModify.php의 json으로 변환된 변수를 받아옴
      success: function (response) {
        // console.log(response);

        if (response["error"]) {
          alert(response["msg"]);
        } else {
          // console.log(response['count']);
          // console.log(response['msg']);
          alert("게시판 수정 성공! 게시판 리스트 페이지로 이동합니다.");
          location.href = "./index.php";
        }
      },
      complete: function () {},
    }); // end ajax

}

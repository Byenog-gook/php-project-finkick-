
// 스크립트가 준비되면 호출되는 함수
$(document).ready(function() {
    answer = confirm("정말 삭제하시겠습니까?");
    if (answer) {
      board_delete();
    } else {
      history.back();
    }
});

function board_delete() {
  urlParams = getUrlParams();
  $.ajax({
    // getMember.php와 통신
    url: "./controller/a_deleteBoard.php",
    type: "GET",
    // 받는 형식은 json 형식
    data: { "num" : urlParams.num },
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
      if (response["error"]) {
        alert(response["msg"]);
      } else {
        alert("게시글이 삭제되었습니다.");
        location.href = "./index.php?target=a_notice_list";
      }
    },
    // 완료시 호출되는 함수
    complete: function () {},
  }); // end ajax
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





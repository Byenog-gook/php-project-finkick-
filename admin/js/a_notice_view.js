let board_num;
let urlParams;

$(document).ready(deletedata = function () {
  // 쿼리스트링 가져옴
  urlParams = getUrlParams();
  $.ajax({
    url: "./controller/a_getNotice_board_view2.php",
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

      $(".reFresh4").html("");

      var div = "";

      if (response["error"]) {
        alert(response["msg"]);
      } else {
        div +=
          "<h3 class='title'>" +
          "공지사항&nbsp;&nbsp;>&nbsp;&nbsp;내용" +
          "</h3>";
        div += " <ul id='view_content'>";
        div +=
          "<li><span class='col1'><b>제목 :&nbsp;&nbsp;</b>" +
          response["result_data"]["title"] +
          "</span>";
        div +=
          "<span class='col2'>" +
          "(" +
          response["result_data"]["date"] +
          ")</span></li>";
        div += "<li>" + response["result_data"]["content"] + "</li>";
        div += "</ul>";
      }
      // 태그 출력
      $(".reFresh4").html(div);
      board_num = response["result_data"]["num"];
    },
    // 완료시 호출되는 함수
    complete: function () {
    },
  }); // end ajax
    var data1 = board_num;
    return {
        data1: data1
};
});

var data = deletedata();
var numdata= data.data1;

function BoardList() {
  location.href = "./index.php?target=a_notice_list";
}

function BoardEdit() {
  location.href = "./index.php?target=a_notice_edit&num="+numdata;
}

function BoardDelete() {
  location.href = "./index.php?target=a_notice_delete&num="+numdata;
}


function BoardWrite() {
  location.href = "./index.php?target=a_notice_write";
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

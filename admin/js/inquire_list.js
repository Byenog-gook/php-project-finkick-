let boardCount; //board 테이블 게시글 숫자
let urlParams; //쿼리스트링 값 받기위한 urlParams;
let scale; // 한 페이지에 표시될 게시글의 갯수
let page; // 페이지 번호
let totalpage; //전체 페이지 수
let start; //시작 레코드번호
let number; // 화면에 표시되는 글의 일련번호
let newpage;
let turnscale; // 다음 화면에 표시될 시작 인덱스
let i;
let j;


$(document).ready(function () {
  urlParams = getUrlParams();
  if (urlParams.page) {
    page = urlParams.page;
  } else {
    page = 1;
  }

  $.ajax({
    url: "./controller/getinquire_board_list.php",
    // post 방식으로 전송
    type: "POST",
    dataType: "json",
    cache: false,
    async: false,
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
    // ajax 연결에 성공했다면, html 코드 생성
    success: function (response) {
      // db의 board테이블 의 게시글 갯수를 반환한 결과값을 변수에 저장
      boardCount = response["boardCount"];
      scale = 6;
      //전체 페이지수 계산
      if (boardCount % scale == 0) {
        totalpage = Math.floor(boardCount / scale);
      } else {
        totalpage = Math.floor(boardCount / scale) + 1;
      }

      start = (page - 1) * scale;
      number = boardCount - start;

      // .reFresh3 태그 내부의 html 초기화
      $(".reFresh3").html("");
      // html 태그들이 들어갈 tag 변수 초기화
      let div = "";

      // getBoard.php에서 db에 정상적으로 입/출력이 완료되었다면
      // result['error'] 배열에 false의 값이 저장되어 있음
      if (response["error"]) {
        alert(response["msg"]);
      } else {
        // each() 메서드는 첫 번째 인자로 배열이나 유사 배열형식인 객체를 받음
        // 두 번째 인자로 콜백 함수를 받으며
        // 콜백 함수의 첫 번째 인자는 배열의 인덱스 번호, 두 번째 인자는 해당 위치의 값을 의미함
        // getBoard.php의 sql문이 저장된 response['result_data'] 배열에 키, 값을 통해 레코드를 가져옴

        div+= "<table class='table table-dark'><tbody>";
        div+= "<tr class='table-active'>";
        div+= "<th>글번호</th>";
        div+= "<th>회원번호</th>";
        div+= "<th>문의제목</th>";
        div+= "<th>날짜</th></tr>";      

        if (i % scale == 0) {

          return turnscale;
        } else if (i > scale - 1) {
          return i;
        }



        for (i = start; i < start + scale && i < boardCount; i++) {


          div += "<tr>";
          div += "<td><a href='./index.php?target=inquire_view&num=" +
            response['result_data'][i]['num'] + "'>" + response['result_data'][i]['num'] + "</a></td>";

          div += "<td><a href='./index.php?target=inquire_view&num=" +
            response['result_data'][i]['num'] +
            "'>" + response['result_data'][i]['requestNum'] + "</a></td>";

            div += "<td><a href='./index.php?target=inquire_view&num=" +
            response['result_data'][i]['num'] +
            "'>" + response['result_data'][i]['requestTitle'] + "</a></td>";

            div += "<td><a href='./index.php?target=inquire_view&num=" +
            response['result_data'][i]['num'] +
            "'>" + response['result_data'][i]['requestDate'] + "</a></td>";

            div += "</tr>";


        }

        div += "</tbody></table>";


        div += "<ul id='page_num'>";
        if (totalpage >= 2 && page >= 2) {
          newpage = page - 1;
          div +=
            "<li><a href='./index.php?target=inquire_list&page=" + newpage + "'>" +
            "◀ 이전" +
            "</a></li>";
        } else {
          div += "<li>&nbsp;</li>";
        }

        for (i = 1; i <= totalpage; i++) {
          if (page == i) {
            div += "<li><b>" + i + "</b></li>";
          } else {
            div +=
              "<li>" +
              "<a href='./index.php?target=inquire_list&page=" +
              i +
              "'>" +
              i +
              "</a></li>";
          }
        }
        if (totalpage >= 2 && page != totalpage) {
          newpage = Number(page) + Number(1);
          div +=
            "<li><a href='./index.php?target=inquire_list&page=" + newpage + "'>" +
            "다음 ▶" +
            "</a></li>";
        } else {
          div += "<li>&nbsp</li>";
        }
        div += "</ul>";

        $(".reFresh3").html(div);
      }
    },
    complete: function () {},
  });
});

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

function BoardWrite() {
  location.href = "./index.php?target=inquire_write";
}

function BoardList() {
  location.href = "./index.php?target=inquire_list";
}
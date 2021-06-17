//이메일 형식 체크 함수
function emailTypeCheck(email) {
  //xxx@xxx.kr|com 형태..

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  
  if(emailReg.test(email)) {
      return true;
  } else {
      return false;
  }
}

function CS_BoardCheckInput() {
    let title = document.customer_boardForm.title;
    let content = document.customer_boardForm.content;

      
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
        url: "./controller/putCustomer_board.php", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
        type: "POST", // HTTP 요청 메소드 GET , POST
        data: $("#customer_boardForm").serialize(), // form태그에 값을 직렬화하여 signup.php로 전달
        datatype: "json", //받는 방식은 json형식으로 받는다.
        cache: false, // 캐쉬 :false
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
        // ajax 연결에 성공했다면, putsignup.php의 json으로 변환된 변수를 받아옴
        success: function (response) {
          console.log(response);
    
          if (response["error"]) {
            alert(response["msg"]);
          } else {
            alert("문의 완료!!");
            location.href = "./index.php";
          }
        },
        complete: function () {},
      }); // end ajax
}
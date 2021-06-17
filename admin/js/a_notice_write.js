function BoardCheckInput() {
    let title = document.notice_boardForm.title;
    let content = document.notice_boardForm.content;
  
    // 자바스크립트에서 == 연산자는 (자료형에 관계없이) 값만을 비교함, 자동으로 형을 변환하여 비교하기 때문
    // ex) 0 == "0" 은 true의 결과를 반환
  
    // === 연산자는 자료형에 엄격하기 때문에 값과 형 모두를 비교함, 자동으로 형 변환을 하지 않음
    // ex) 0 === "0" 은 false의 결과를 반환
  
    // 따라서 의도치 않은 결과가 생기지 않도록 === 연산자를 권장
  
    // 다른 많은 언어와 마찬가지로 자바스크립트에서도 정규식을 지원
    // - 정규식에 관련한 예제 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)
  
  
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
      url: "./controller/a_putNotice_board.php", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
      type: "POST", // HTTP 요청 메소드 GET , POST
      data: $("#notice_boardForm").serialize(), // form태그에 값을 직렬화하여 signup.php로 전달
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
          alert("업로드 성공완료 !!");
          location.href = "./index.php";
        }
      },
      complete: function () {},
    }); // end ajax
  }
  
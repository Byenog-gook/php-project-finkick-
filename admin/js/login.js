window.onload = function() {
    var id = document.loginForm.id;
    id.focus();
}

//아스키코드상 13번이 엔터 엔터키누르면 loginCheckInput함수실행
function pressEnter(){
    loginCheckInput();
}

// 취소버튼 눌렸을때 호출
function cancel(){
        //홈화면 호출
        history.back();
}

function loginCheckInput() {
  var password = document.loginForm.password;

  if (id.value === ""){
      alert("아이디를 입력해주세요!");
      id.focus();
      return
  }
  if (password.value === ""){
      alert("비밀번호를 입력해주세요!");
      password.focus();
      return
  }

      // document.loginForm.submit();

      $.ajax({
          url : "./controller/getlogin_curl.php",
          data : $("#loginForm").serialize(),
          type : "POST",
          dataType: "json",
          cache: false,
          error: function (request, status, error) {
            alert("올바른 아이디와 패스워드를 입력해주세요!");
            //   alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
          },
          //오류검출 코드 request,status,error(파라미터)
          // alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
          success: function(result) {   
            if(result.result_data.account.type === "M"){
              alert("일반회원은 이용할수없는 페이지입니다.");
            }else {
            alert("로그인 성공");
            //메인페이지로
            location.href = './index.php'
          }
          },

      });
}
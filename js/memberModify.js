// 스크립트가 준비되면 호출되는 함수
$(document).ready(function() {

    $.ajax({
        // getMember.php와 통신
        url: "./controller/getMember.php",
        type: "GET",
        // 받는 형식은 json 형식
        dataType: "json",
        cache: false,

        // 실패시 호출되는 함수
        error: function () {
            console.log('connection error...');
        },
        // 성공시 호출되는 함수
        success: function (response) {
          // console.log(response);
            // class가 reFresh인 태그 초기화
            $('.reFresh').html("");

            var div = "";

            if (response['error']) {
                alert(response['msg']);
            } else {
                // response['result_data']
                // console.log(response['result_data']);
                // response배열의 0번 인덱스 (객체) 반환
                // console.log(response[0]);
                // response배열의 0번 인덱스에 id(key)에 값(value)을 반환
                // console.log(response[0].id);
                div += "<div class='form-group'><label>아이디</label>" +
                    "<input type='text' name='id' class='form-control' value='" + response['result_data']['id'] + "' readonly/></div>"
                div += "<div class='form-group'><label>비밀번호</label>" +
                    "<input type='password' name='password' class='form-control passwd' placeholder='비밀번호 변경' onkeydown='enter()'></div>"
                div += "<div class='from-group'><label>휴대폰 번호</label>" +
                    "<input type='text' name='phoneNumber' class='form-control' placeholder='휴대폰번호 변경' value='" + response['result_data']['phoneNumber'] + "' onkeydown='enter()'></div>"
                }
            // 태그 출력
            $('.reFresh').html(div);
        },
        // 완료시 호출되는 함수
        complete: function () {
            // 패스워드 위치에 포커스
            $('.password').focus();
        }
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
        signupCheckInput();
    }
}

//취소 버튼을 눌렀을때 이전화면으로 돌아가는 cancel 함수입니다.
function cancel() {
    // 이전 화면으로
    history.back();
}

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

//휴대폰 형식 체크 함수
function phoneTypeCheck(phone) {
    //010-xxxx-xxxx 형태

    var phoneReg = /^(010|016|011|017)(\d{3}|\d{4})\d{4}$/g;

    if(phoneReg.test(phone)) {
        return true;
    } else {
        return false;
    }
}


//로그인 버튼 입력이나 사용자가 엔터키 입력시 호출되는 함수
function signupCheckInput() {
  // 자바스크립트에서는 데이터 타입을 자동으로 선언해주지만. typeof 연산자를 사용하면 변수의 데이터 타입을 반환한다.
  //input 태그의 사용자가 입력한 값들은 모두 string형으로 저장된다.

  //사용자가 입력한 form 태그의 내부 데이터를 추출

  //var과 let의 차이

  //var은 변수 재선언이 가능하지만 let은 변수 재선언이 불가능하다.
  //재할당은 가능함.

  //https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90

  let id = document.memberForm.id;
  let password = document.memberForm.password;
  let phoneNumber = document.memberForm.phoneNumber;

  // 자바스크립트에서 == 연산자는 (자료형에 관계없이) 값만을 비교함, 자동으로 형을 변환하여 비교하기 때문
    // ex) 0 == "0" 은 true의 결과를 반환

    // === 연산자는 자료형에 엄격하기 때문에 값과 형 모두를 비교함, 자동으로 형 변환을 하지 않음
    // ex) 0 === "0" 은 false의 결과를 반환

    // 따라서 의도치 않은 결과가 생기지 않도록 === 연산자를 권장

    // 다른 많은 언어와 마찬가지로 자바스크립트에서도 정규식을 지원
    // - 정규식에 관련한 예제 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)

  if (id.value === "") {
    alert("아이디를 입력해주세요!!!");
    id.focus();
    return;
} else {
    if (!emailTypeCheck(id.value)) {
        alert("아이디 양식은 xxx@xxx.xxx 입니다.");
        id.focus();
        return;
    }
}

if (password.value === "") {
    alert("비밀번호를 입력해주세요");
    password.focus();
    return;
}

if (phoneNumber.value === "") {
    alert("휴대폰번호를 입력해주세요");
    phoneNumber.foucs();
    return;
} else {
    if (!phoneTypeCheck(phoneNumber.value)) {
        alert("ex) 01011111111");
        phone.focus();
        return;
    }
}

    // document.memberModify.submit();    // submit() 함수는 제출(넘겨줌)기능을 수행
    // ajax로 submit() 기능을 대신함
    $.ajax({
        url: "./controller/putMemberModify.php",
        type: "POST",
        // form태그에 값을 직렬화하여 putMemberModify.php로 전달
        data : $('#memberForm').serialize(),
        // 받는 형식은 json 형식
        dataType: "json",
        cache: false,
        error: function (request,status,error) {
           alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            console.log('서버와 연결에 실패했습니다...');
        },
        // ajax 연결에 성공했다면, putMemberModify.php의 json으로 변환된 변수를 받아옴
        success: function (response) {
            // console.log(response);

            if (response['error']) {
                alert(response['msg']);
            } else {
                // console.log(response['count']);
                // console.log(response['msg']);
                alert('정보 수정 성공! 메인 페이지로 이동합니다.');
                location.href = './index.php'
            }
        },
        complete: function () {

        }
    }); // end ajax
}

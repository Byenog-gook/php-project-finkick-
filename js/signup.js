var time = 300; //기준시간 작성
var min = ""; // 분
var sec = ""; // 초


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

//회원가입시 아이디 중복 버튼을 눌렀을때 아이디 중복검사를 하는 함수
//팝업을 띄울창 : 부모창
//팝업 : 자식창
//windown.oepn(path, 이름, option)

function test(id) {
    console.log(id);
    if (id == "") { // js 에서 null 값 표시할때는 (변수명 == "")을 사용한다.
        alert("아이디값을 먼저 입력해주세요!");
    } else
        check_id();
}

function check_id() {
    $.ajax({
        url: "./controller/register_check_id_curl.php", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
        type: "POST", // HTTP 요청 메소드 GET , POST
        data: $('#signup_form').serialize(), // form태그에 값을 직렬화하여 signup.php로 전달
        datatype: "json", //받는 방식은 json형식으로 받는다.
        cache: false, // 캐쉬 :false
        error: function (request, status, error) {
            alert("사용 불가능한 이메일입니다.")
            console.log('connection error..');
            //   alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        },
        // ajax 연결에 성공했다면, putsignup.php의 json으로 변환된 변수를 받아옴
        success: function (result) {
            if (result.code == 0 || result.code == -98) {
                console.log(result);

                alert("사용가능한 아이디입니다. 5분안에 회원가입을 진행해주세요");

                //setInterval(함수, 시간) : 주기적인실행
                var x = setInterval(function () {
                    //parseInt() : 정수를 반환
                    min = parseInt(time / 60); // 몫을계산
                    sec = time % 60; // 나머지를 계산

                    document.getElementById("demo").innerHTML = min + "분" + sec + "초";
                    time--;

                    //타임아웃시
                    if (time < 0) {
                        clearInterval(x);
                        document.getElementById("demo").innerHTML = "시간초과";
                    }
                }, 1000); //1초간격으로 메세지를 보여줌 
            } else {
                 alert("사용 불가능한 이메일입니다.");
            }
            
        },
    }); // end ajax
}

//취소 버튼을 눌렀을때 이전화면으로 돌아가는 cancel 함수입니다.
function cancel() {
    // 이전 화면으로
    history.back();
}

// 아이디(이메일) 형식 체크 함수
function idTypeCheck(id) {
    //xxx@xxx.kr|com 형태..

    var idReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (idReg.test(id)) {
        return true;
    } else {
        return false;
    }
}

//휴대폰 형식 체크 함수
function phoneTypeCheck(phone) {
    //010-xxxx-xxxx 형태

    var phoneReg = /^(010|016|011|017)(\d{3}|\d{4})\d{4}$/g;

    if (phoneReg.test(phone)) {
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

    let id = document.signForm.id;
    let password = document.signForm.pw;
    let phone = document.signForm.phone;

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
        if (!idTypeCheck(id.value)) {
            alert("이메일 형식으로 입력해주세요.");
            id.focus();
            return;
        }
    }

    if (password.value === "") {
        alert("비밀번호를 입력해주세요");
        password.focus();
        return;
    }


    if (phone.value === "") {
        alert("휴대폰번호를 입력해주세요");
        phone.foucs();
        return;
    } else {
        if (!phoneTypeCheck(phone.value)) {
            alert("휴대폰번호 양식은 01011111111 입니다.");
            phone.focus();
            return;
        }
    }
    // document.signForm.submit(); // submit() 함수는 form태그에서 제출 기능을 수행한다

    $.ajax({
        url: "./controller/putsignup_curl.php", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
        type: "POST", // HTTP 요청 메소드 GET , POST
        data: $('#signup_form').serialize(), // form태그에 값을 직렬화하여 signup.php로 전달
        datatype: "json", //받는 방식은 json형식으로 받는다.
        cache: false, // 캐쉬 :false
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
        // ajax 연결에 성공했다면, putsignup.php의 json으로 변환된 변수를 받아옴
        success: function (response) {
            console.log(response);
            if(response.code == 0) {
            alert('회원가입성공 메인페이지로 이동합니다!');
            location.href = './index.php'
        } else {
            alert('아이디 인증작업을 먼저 진행해주세요');
        }

        },
        complete: function () {

        }
    }); // end ajax

}
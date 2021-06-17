$(document).ready(function () {
    // 회원 정보 가져오고, html형식으로 레코드 출력
    getMemberResult();
});

// 회원 정보를 가져오는 함수
function getMemberResult() {
    // 글 번호 저장 변수
    let tableNum = 0;

    $.ajax({
        url : "./controller/getAllMembers.php",
        dataType: "json",
        // 갱신된 데이터를 받아올 수 있도록 캐싱 false
        cache: false,
        error: function () {
            console.log('connection error..');
        },

        success: function(response) {
            if (response['error']) {
                alert('DB 연결에 문제가 생겼습니다...');
            } else {
                // console.log(response);
                tableNum = response['member_count'];

                // reFreshMember하위의 html엘리먼트 초기화
                $('.reFreshMember').html("");
                // html 태그를 저장할 변수 선언
                var tag = "";

                // 직위를 담는 변수 선언
                let position = "";

                // each 콜백 함수를 사용하여 배열에 값이 없을 때 까지 반복
                $.each(response['result_data'], function (key, val) {
                    switch (val.type) {
                        case 'O' :
                            position = "운영자"
                            break;
                        case 'A' :
                            position = "관리자"
                            break;
                         case 'M' :
                             position = "회원"
                             break;   
                    }
                   
                    // 관리자가 삭제하지 않았다면 출력
                 
                        tag += "<tr>";
                        tag += "<td><button id='num' class='boardPermissionButton' type='button' data-toggle='modal' data-target='#modal_member_permission' data-num='"+ val.num + "'>" + position + "</button></td>";
                        tag += "<td>" + val.id + "</td>";
                        tag += "<td>" + val.password + "</td>";
                        tag += "<td>" + val.phoneNumber + "</td>";
                        tag += "<td>" + val.registDay + "</td>";
                        tag += "<td><input type='button' value='삭제' onclick=\"deleteMember('" + val.num + "')\"/></td>";
                        tag += "</tr>"
               
                });
            }
            $('.reFreshMember').html(tag);
        },

        complete: function(response) {

        }
    }); // end ajax
}

var memberId;

// 모달이 띄워졌을때 호출되는 함수
$('#modal_member_permission').on('show.bs.modal', function (event) {
    var data = $(event.relatedTarget);

    memberId = data.data('num');

    // putMemberPermission(memberCode);
})


// 권한 주기 버튼을 클릭하였을 때 호출되는 함수
$('.permissionButton').click(function () {

    var memberNum = memberId;
    var memberType = $(this).val();
    if (confirm("정말 변경하시겠습니까?")) {
        $.ajax({
            url: "./controller/patchMemberPermission.php",
            data: {"memberNum": memberNum, "memberType" : memberType},
            type: "POST",
            dataType: "json",
            // 갱신된 데이터를 받아올 수 있도록 캐싱 false
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

            success: function (response) {
                console.log(response);
                if (response['error']) {
                    alert('DB 연결에 문제가 생겼습니다...');
                } else {
                    location.reload();
                }
            },
        }); // end ajax
    }
});

// 회원 삭제 함수
function deleteMember(memberNum) {
    if (confirm("정말 삭제하시겠습니까?")){
        $.ajax({
            url : "./controller/deleteMember.php",
            type : "POST",
            data: {"memberNum" : memberNum},
            dataType: "json",
            // 갱신된 데이터를 받아올 수 있도록 캐싱 false
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

            success: function(response) {
                if (response['error']) {
                    alert(response['msg']);
                } else {
                    alert(response['msg']);
                    console.log(response);
                }
            },
            complete: function() {
                // // 회원 새로고침
                getMemberResult();
            }
        }); // end ajax
    }
}



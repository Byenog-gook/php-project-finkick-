<section class="resume-section" id="Login">
             <div class="resume-section-content">
              <div class="continer">
    <!-- 입력된 결과를 putMemberModify.php로 보내 db에 업데이트-->
    <form name="memberForm" id="memberForm" action="../controller/putMemberModify.php" method="post">

     <div class="col-12 col-md-12 col-xl-12">
            <div class="reFresh" style="float=right">
                <!-- 비동기적으로 태그 생성-->
            </div>
            <br>
                <button type="button" id="next" class="col-md-12 btn btn-dark login" onclick="signupCheckInput()">수정</button>
                <button type="button" class="col-md-12 btn btn-dark cancel" onclick="cancel()">취소</button>
     
        </div>
    </form>
</div>
</div>
</section>

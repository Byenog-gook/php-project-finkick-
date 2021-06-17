  <!-- Login -->
  <section class="resume-section" id="Login">
             <div class="resume-section-content">
              <div class="continer">
             <form id="loginForm" name="loginForm">
             <div class="form-group">
            <label for="exampleInputEmail1">아이디</label>
            <input type="text" name="id" class="col-md-6 form-control" id="id" aria-describedby="emailHelp" placeholder="아이디 입력" onKeyDown="if(event.keyCode == 13) pressEnter()">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">비밀번호</label>
            <input type="password" name="password" class="col-md-6 form-control" id="passwd" placeholder="비밀번호 입력" onKeyDown="if(event.keyCode == 13) pressEnter()">
            </div>
        </div>
             </form>
            <div class="form-group">
            <button type="button" class="col-md-3 btn btn-light login" onclick="loginCheckInput()">로그인</button>
            <button type="button" class="col-md-3 btn btn-light cancel" onclick="cancel()">취소</button>
            </div>  
              </div>
             </div>
  </section>
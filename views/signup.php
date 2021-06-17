             <!-- Sign up -->
            <section class="resume-section" id="Sign">
             <div class="resume-section-content col-md-11">

             <h5>Sign up</h5>
             <form id="signup_form" name="signForm">
              <div class="form-group">
               <label for="inputid">아이디</label>
               <a href="#" class="myButton" onclick="test(document.signForm.id.value)">중복</a>
               <div id="demo"></div>
               <input type="text" name="id" class="col-md-6 form-control" id="formid" placeholder="Enter email address" onkeydown="enter()">
              </div>
               <div class="form-group">
             <label for="inputpw">비밀번호</label>
             <input type="password" name="pw" class="col-md-6 form-control" id="formpw" placeholder="비밀번호를 입력해주세요" onkeydown="enter()">
               </div>
               <div class="form-group">
            <label for="exampleInputPassword2">휴대폰 번호</label>
            <input type="text" name="phone" class="col-md-6 form-control" placeholder="ex)01011111111" onkeydown="enter()">
               </div>
               <div class="form-group">
            <br>
            <button type="button" id="next" class="col-md-3 btn btn-light" onclick="signupCheckInput()">가입</button>
            <button type="button" class="col-md-3 btn btn-light" onclick="cancel()">취소</button>
               </div>
            </form>
             </div>
            </section>
            </div>

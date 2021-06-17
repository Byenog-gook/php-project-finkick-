 <!-- Interests-->
 <section class="resume-section" id="interests">
     <div class="resume-section-content">
         <div class="alert alert-secondary" role="alert">
             도움이 필요한 유형을 선택해주세요!
         </div>

         <div class="card-group">
             <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                 <div class="card-header" id="card-title"><a href="./index.php?target=worker">안 전 수 칙</a></div>
                 <div class="card-body">
                     <a href="./index.php?target=worker"><img src="assets/img/worker.png" alt=""></a>
                 </div>
             </div>
             <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                 <div class="card-header" id="card-title"><a href="./index.php?target=clock">이용 가능 시간</a></div>
                 <div class="card-body">
                     <a href="./index.php?target=clock"><img src="assets/img/clock.png" alt=""></a>
                 </div>
             </div>
             <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                 <div class="card-header" id="card-title"><a href="./index.php?target=parking">주차 방법 (서울 / 그 외)</a>
                 </div>
                 <div class="card-body">
                     <a href="./index.php?target=parking"><img src="assets/img/parking.png" alt=""></a>
                 </div>
             </div>
             <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                 <div class="card-header" id="card-title"><a href="./index.php?target=support">고객센터 번호</a></div>
                 <div class="card-body">
                     <a href="./index.php?target=support"><img src="assets/img/support.png" alt=""></a>
                 </div>
             </div>
         </div>
         <br><br>
         <?php
    if (isset($_SESSION['userId']) == 0) {
    ?>
         <div class="alert alert-danger" role="alert">
             문제가 해결되지 않으셨나요?&nbsp;&nbsp; <a href="#" onclick="login_alert()">1:1문의하기</a>
         </div>

         <?php
           } else { 
                ?>
         <div class="alert alert-danger" role="alert">
             문제가 해결되지 않으셨나요?&nbsp;&nbsp; <a href="./index.php?target=customer_board">1:1문의하기</a>
         </div>
         <?php
            }
            ?>
     </div>
 </section>
 <hr class="m-0" />
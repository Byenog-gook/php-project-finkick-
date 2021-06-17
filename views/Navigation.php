  <!-- Navigation-->
  <?php
        ob_start();
        session_start();
  ?>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <br>

    <!-- 비로그인시 출력될 네비게이션 탭  -->
    <?php
    if (isset($_SESSION['userId']) == 0) {
    ?>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./index.php?target=signup">Sign up</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./index.php?target=login">Login</a></li>
    </ul>
    <?php
    } else { 
    ?>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./index.php?target=memberModify">Modify</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./views/logout.php">Logout</a></li>
    </ul>
    <br>
    <span class="badge badge-pill badge-secondary"><?=$_SESSION["userType"]?>님 환영합니다</span>
    <?php 
    } 
    ?>

    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Fin Kick</span>
      <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="assets/img/profiles2.png" alt="" /></span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
        class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class='nav-item'><a class='nav-link js-scroll-trigger' href='./index.php?target=finkick'>Fin Kick</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./index.php?target=notice_board_list">공 지 사 항</a></li>
        <?php
                                if (isset($_SESSION['userId']) == 0) {
                                    ?>
                                <?php
                                } else {
                                    ?>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./index.php?target=summary">소&nbsp;개</a></a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./index.php?target=customer_center">고 객 센 터</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./index.php?target=inquire_answer_list&num=<?=$_SESSION["accountnum"]?>">답변내역</a></li>
            <?php } ?>
      </ul>
    </div>
  </nav>
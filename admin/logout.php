<?php
  session_start();
  // 세션 해제
  // 아이디
  unset($_SESSION['userId']);
  // 비밀번호
  unset($_SESSION["userPassword"]);
  // 권한
  unset($_SESSION["userType"]);

  echo "<script>
          alert('로그아웃 완료!');
          location.href='index.php';
      </script>";
?>
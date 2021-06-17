<!DOCTYPE html>
<html lang="ko">
    <head>
       <?php
            //공통 적용 css, js 파일
            include "head.php";
       ?>
<style>
<?php
          if(isset($_GET["target"])) {
            $target = $_GET["target"];
        } else {
              $target = "index";
       }
       include "./css/".$target.".css";
?>
</style> 
    </head>

    <body id="page-top" class="sb-nav-fixed">

        <?php
            //./views 메뉴 네비게이션 부분
            include "./views/Navigation.php";
            if(isset($_GET["target"])) {
                $target = $_GET["target"];
            } else {
                  $target = "index";
           }
           include "./views/".$target.".php";
        ?>
    </body>
        <script>
    <?php
            
             //url에 target으로 주어지는 get방식의 값이있다면  $target안에 url안의 값을 넣어주고
             //그렇지않다면은 $target안에 index를 넣어주어라.
              if(isset($_GET["target"])) {
                    $target = $_GET["target"];
                } else {
                      $target = "nothing";
               }
            //각 php파일에 적용 되야할 js 파일 불러오기
            include "./js/".$target.".js";
             
        ?>
      </script>
   

   
</html>

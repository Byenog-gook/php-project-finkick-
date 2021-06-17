<div id="layoutSidenav_content">
    <div class="container-fluid">
        <div class="row" id="board_write_form">
            <div class="col-md-11">
                <div class="alert alert-dark col-md-11" id="board_write_title" role="alert"> 1:1문의 > 답변 </div>

                <form name="notice_boardForm" id="notice_boardForm">
                <div class="reFresh5">
                </div>
                    <div class="col-md-11 mb-4">
                        <input type="hidden" class="form-control" id="accountnum" name="accountnum"
                            value="<?=$_SESSION['accountnum']?>">
                    </div>
                    <div class="col-md-11 mb-4">
                        <div class="form-floating">
                            <label for="Textarea">내용</label>
                            <textarea class="form-control" name="content" placeholder="inquire contents"
                                id="Textarea"></textarea>
                        </div>
                        <br>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-dark" onclick="BoardCheckInput()">답변 전송하기</button>
                            <button type="reset" class="btn btn-dark">다시 쓰기</button>
                            <button type="button" class="btn btn-dark" onclick="history.back(-1)">되돌아가기</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
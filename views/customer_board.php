<section class="resume-section">
    <div class="resume-section-content">
        <div class="container">

            <div class="row" id="board_write_form">

                <div class="col">

                </div>
                <div class="col-md-11">

                    <div class="alert alert-info col-md-11" id="board_write_title" role="alert"> 고객센터 > 문의하기 </div>

                    <form name="customer_boardForm" id="customer_boardForm">
                        <div class="col-md-11 mb-4">
                            <input type="hidden" class="form-control" id="accountnum" name="accountnum"
                                value="<?=$_SESSION['accountnum']?>">
                        </div>
                        <div class="col-md-11 mb-4">
                            <label for="title" class="form-label">제목</label>
                            <input type="text" class="form-control" id="title" name="title" placeholder="제목을 입력해주세요">
                        </div>
                        <div class="col-md-11 mb-4">
                            <div class="form-floating">
                                <label for="Textarea">내용</label>
                                <textarea class="form-control" name="content" placeholder="Contents"
                                    id="Textarea"></textarea>
                            </div>
                            <br>
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-dark" onclick="CS_BoardCheckInput()">문의 하기</button>
                                <button type="reset" class="btn btn-dark">다시 쓰기</button>
                                <button type="button" class="btn btn-dark" onclick="history.back(-1)">취소 하기</button>
                            </div>
                        </div>
                        <div class="col-md-11 mb-4">
                            <br><br>
                        </div>

                        <div class="alert alert-info col-md-11" id="advice" role="alert">문의주신 내용은 이메일을 통해 답변해드립니다.</div>
                    </form>
                </div>

                <div class="col">

                </div>

            </div>
        </div>
    </div>
</section>
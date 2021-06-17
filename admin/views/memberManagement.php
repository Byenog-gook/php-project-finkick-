<div id="layoutSidenav_content">   
    <main>
        <div class="container-fluid">
            <ol class="breadcrumb mb-4 mt-3">
                <li class="breadcrumb-item active">회원 관리</li>
            </ol>

            <!-- 회원 수정 -->
            <form name="memberForm" id="memberForm">
                <div class="memberContainer">
                    <h3>회원 수정</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>권한</th>
                                <th>아이디</th>
                                <th>비밀번호</th>
                                <th>휴대폰</th>
                                <th>가입일</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody class="reFreshMember">
                            <!-- 비동기 회원 정보 생성 -->
                        </tbody>
                    </table>
                </div>
            </form>
            <!-- Modal -->
            <div class="modal fade bd-example-modal-lg" id="modal_member_permission" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">회원 권한 변경</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <form id="memberUpdateForm">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">권한 할당</h4>
                                            <div class="form-group row">
                                                <label class="col-sm-4 col-form-label">운영자 권한</label>
                                                <div class="col-sm-8 permissionContainer">
                                                    <input type="button" name="Operator"
                                                        class="btn btn-gradient-primary permissionButton" value="O" />
                                                </div>
                                                <label class="col-sm-4 col-form-label">관리자 권한</label>
                                                <div class="col-sm-8 permissionContainer">
                                                    <input type="button" name="manager"
                                                        class="btn btn-gradient-primary permissionButton" value="A" />
                                                </div>
                                                <label class="col-sm-4 col-form-label">일반회원 권한</label>
                                                <div class="col-sm-8 permissionContainer">
                                                    <input type="button" name="commonUser"
                                                        class="btn btn-gradient-primary permissionButton" value="M" />
                                                </div>
                                            </div>
                                        </div>
                                        <!-- card-body end -->
                                    </div>
                                    <!-- card end-->
                                </form>
                            </div>
                            <!-- container-fluid end -->
                        </div>
                        <!-- modal-body end -->
                    </div>
                    <!-- modal-content end -->
                </div>
                <!-- modal-dialog end -->
            </div>
            <!-- modal end -->
    </main>
    <footer class="py-4 bg-light mt-auto">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; FinKick Website 2021</div>
                <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                </div>
            </div>
        </div>
    </footer>
</div>
</div>


<script src="js/scripts.js"></script>
@extends('layout.layout')
@section('header','Quản lý loại tài khoản')
@section('main')
    <div class="mt-2">
        <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Thêm Loại Tài Khoản</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm Loại Tài Khoản</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                      <input type="text" class="form-control" id="themloaitk" placeholder="Tên Loại Tài Khoản" aria-label="Username" aria-describedby="basic-addon1">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                    <button type="button" class="btn btn-primary" id="bntsubmit">Thêm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" class="form-control" id="dangntk" aria-describedby="emailHelp" placeholder="Email">
      </div>
      <button type="submit" class="btn btn-primary" id="bntsubmitd">Submit</button>
    </form>
    
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="admin/themloaitaikhoan.js"></script>
    <script src="admin/dangn.js"></script>
@endsection
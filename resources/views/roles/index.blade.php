<style>
  .taikhoanstt{
    cursor: pointer;
  }
  .edituseremail{
    cursor: pointer;
  }
</style>
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

        <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">Thêm tài khoản</button>

        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModal2Label" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModal2Label">Thêm Tài Khoản</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="username" placeholder="Tên người dùng" aria-label="Username" aria-describedby="basic-addon1">
                    <input type="text" class="form-control mt-2" id="useremail" placeholder="Email người dùng" aria-label="Username" aria-describedby="basic-addon1">
                    
                    <select name="" class="form-control mt-2" id="selectLTK">
                        <option value="0">Chọn loại tài khoản</option>
                        @foreach ($LoaiTK as $item)
                            <option value="{{$item['id']}}">{{$item['name']}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                  <button type="button" class="btn btn-primary" id="addUserSubmit">Thêm</button>
                </div>
              </div>
            </div>
        </div>
        {{-- -=========================================== --}}

        <div class="modal fade" id="EditModal" tabindex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Thay đổi thông tin</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div id="replaceArea">
                  
                </div>
                <select name="" class="form-control mt-2" id="selectLTKEdit">
                  <option value="0">Chọn loại tài khoản</option>
                  @foreach ($LoaiTK as $item)
                      <option value="{{$item['id']}}">{{$item['name']}}</option>
                  @endforeach
                </select>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="editSubmitBtn">Lưu</button>
              </div>
            </div>
          </div>
        </div>

        {{-- ================================================ --}}

      <div class="mt-2">
        <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên tài khoản</th>
                <th scope="col">Email</th>
                <th scope="col">Loại tài khoản</th>
                <th scope="col">Tình trạng</th>
                <th scope="col">Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
                <?php $i=1;?>
                @foreach ($allUser as $item)
                <tr>
                    <th scope="row"><?=$i++?></th>
                    <td><b>{{$item['username']}}</b></td>
                    <td><b class="edituseremail" data-id="{{$item['userID']}}">{{$item['useremail']}}</b></td>
                    <td>{{$item['rolename']}}</td>
                    <td>@if ($item['status']==1)
                        <b class="taikhoanstt" data-id="{{$item['userID']}}">Đang hoạt động</b>
                    @else
                    <b class="taikhoanstt" data-id="{{$item['userID']}}">Đang khóa</b>
                        
                    @endif</td>
                    <td>{{$item['created_at']}}</td>
                  </tr>
                @endforeach
              
            </tbody>
          </table>
          
      </div>
    </div>

    
    <script src="admin/users.js"></script>
@endsection
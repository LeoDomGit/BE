@extends('layout.layout')
@section('header','Quản lý quận huyện')
@section('main')
<div class="modal fade" id="addQuanModal" tabindex="-1" aria-labelledby="addQuanModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addQuanModalLabel">Thêm Quận</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="Tên quận" class="form-control" id="districtName">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="submitQuan">Lưu</button>
        </div>
      </div>
    </div>
  </div>
  <button class="btn btn-primary" data-toggle="modal" data-target="#addQuanModal">Thêm Quận</button>
  <div class="mt-2">
    <div class="mt-2">
      <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên Quận</th>
              <th scope="col">Ngày tạo</th>
              <th scope="col">Tùy chọn</th>
              {{-- <th scope="col"></th> --}}
            </tr>
          </thead>
          <tbody>
              <?php $i=1;?>
              @foreach ($allQuan as $item)
              <tr>
                  <th scope="row"><?=$i++?></th>
                  <td><div class="quanName" data-id="{{$item["id"]}}">{{$item['districtname']}}</div></td>
                  <td>{{$item['updated_at']}}</td>
                  <td><button class="btn-sm btnxoaQuan btn btn-danger"  data-id="{{$item["id"]}}"> Xóa</button></td>
                </tr>
              @endforeach
          </tbody>
        </table>
        
    </div>
  </div>
    <script src="admin/quanhuyen.js"></script>
@endsection
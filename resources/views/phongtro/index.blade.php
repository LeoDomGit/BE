@extends('layout.layout')
@section('header','Quản lý phòng trọ')
@section('main')
<div class="modal fade" id="addPTModal" tabindex="-1" aria-labelledby="addPTModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addPTModalLabel">Thêm Phòng Trọ</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-sm-4 mt-3">
                    <input type="text" class="form-control" id="roomname" placeholder="Tên phòng">
                </div>
                <div class="col-sm-4 mt-3">
                    <input type="number" class="form-control" id="price" placeholder="Giá">
                </div>
                <div class="col-sm-4 mt-3">
                    <input type="text" class="form-control" id="phone" placeholder="Số diện thoại">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-6 mt-3">
                    <input type="number" class="form-control" id="dientich" placeholder="Diện tích">
                </div>
                <div class="col-sm-6 mt-3">
                    <select name="" class="form-control" id="idQuanSelect">
                        <option value="0" selected>Chọn quận</option>
                        @foreach ($allQuan as $item)
                            <option value="{{$item['id']}}">{{$item['districtname']}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm mt-3">
                    <input type="text" class="form-control" id="address" placeholder="Địa chỉ">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm mt-3">
                    <textarea name="" class="form-control" id="mota" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm mt-3">
                    <input type="file" name="file" id="file">
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="submitPhongTroBtn">Lưu</button>
        </div>
      </div>
    </div>
  </div>
    <div class="mt-3">
        <button class="btn btn-warning" data-toggle="modal" data-target="#addPTModal">Thêm phòng</button>
    </div>
<script src="admin/phongtro.js"></script>
@endsection
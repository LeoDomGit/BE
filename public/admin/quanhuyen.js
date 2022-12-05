var host = window.location.host; 
$(document).ready(function () {
  $.ajaxSetup({
    data: {
        host: host,
    },
});
    add();
    edit();
    deleete();
});

function deleete(){
  $(".btnxoaQuan").click(function (e) { 
    e.preventDefault();
    var idQ=$(this).attr('data-id');
    Swal.fire({
      icon:'question',
      text: 'Bạn muốn xóa quận?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Xóa',
      denyButtonText: `Không`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        $.ajax({
          type: "post",
          url: "http://127.0.0.1:3000/api/deleteQuan",
          data: {id:idQ},
          dataType: "JSON",
          success: function (response) {
            if(response.check==true){
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Đã xóa thành công'
              }).then(()=>{
                window.location.reload();
              })
            }else if(response.check==false){
              if(response.message.id){
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'error',
                  title: response.message.id
                })
              }else if(response.message){
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'error',
                  title: response.message
                })
              }
            }
          }
        });
      } else if (result.isDenied) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Giữ nguyên'
        })
      }
    })
  });
}
// ==================================

function edit(){
  $('.quanName').click(function (e) { 
    e.preventDefault();
    var idQ=$(this).attr('data-id');
    var newquan = '';
    var str=`
    <input type="text" id="newname" class="form-control" placeholder="Tên quận mới">
    `;
    $(this).html(str);
    $("#newname").keyup(function (e) { 
      newquan=$(this).val().trim();
      if(e.which == 13) {
        if(newquan!=''){
          Swal.fire({
            icon:'question',
            text: 'Bạn muốn thay đổi tên quận ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Đúng',
            denyButtonText: `Không`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              $.ajax({
                type: "post",
                url: "http://127.0.0.1:3000/api/editQuan",
                data: {quan:newquan,id:idQ},
                dataType: "JSON",
                success: function (response) {
                  if(response.check==true){
                    const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    Toast.fire({
                      icon: 'success',
                      title: 'Thay đổi thành công'
                    }).then(()=>{
                      window.location.reload();
                    })
                  }else if(response.check==false){
                    if(response.message.id){
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'error',
                        title: response.message.id
                      })
                    }else if(response.message.quan){
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'error',
                        title: response.message.quan
                      })
                    }else if(response.message){
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'error',
                        title: response.message
                      }).then(()=>{
                        window.location.reload();
                      })
                    }
                  }
                }
              });
            } else if (result.isDenied) {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Giữ nguyên'
              })
            }
          })
        }
      }
    });
  });
}
// ==================================

function add(){
    $("#submitQuan").click(function (e) { 
        e.preventDefault();
        var quan= $("#districtName").val().trim();
        if(quan==''){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'Thiếu tên quận'
              })
        }else{
            $.ajax({
                type: "post",
                url: "http://127.0.0.1:3000/api/addQuan",
                data: {quan:quan},
                dataType: "JSON",
                success: function (response) {
                    if(response.check==true){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'success',
                            title: 'Thêm thành công'
                          }).then(()=>{
                            window.location.reload();
                          })
                    }else if(response.check==false){
                        if(response.message.quan){
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                  toast.addEventListener('mouseenter', Swal.stopTimer)
                                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                              })
                              
                              Toast.fire({
                                icon: 'error',
                                title:response.message.quan
                              })
                        }else if(response.message){
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                  toast.addEventListener('mouseenter', Swal.stopTimer)
                                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                              })
                              
                              Toast.fire({
                                icon: 'error',
                                title:response.message
                              })
                        }
                    }
                }
            });
        }
    });
}
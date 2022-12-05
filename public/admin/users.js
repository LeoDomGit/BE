var host = window.location.host; 
$(document).ready(function(){
  $.ajaxSetup({
    data: {
        host: host,
    },
});
  themLoaiTK();
  themTK();
  switchUser();
  editUser();
});

function editUser(){
  $(".edituseremail").click(function (e) { 
    var id = $(this).attr('data-id');
    e.preventDefault();
    var str =`
    <input type="text" class="form-control mb-2" id="newEmail" placeholder="Email mới">
    `;
    $("#replaceArea").html(str);
    $("#EditModal").modal('show');
    $("#editSubmitBtn").click(function (e) { 
      e.preventDefault();
      var email =$("#newEmail").val().trim();
      if(email==''){
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
          title: 'Bạn chưa nhập email'
        })
      }else if(!email.match(/(.+)@(gmail+)\.(com)/i)&&!email.match(/(.+)@(fpt.edu+)\.(vn)/i)){
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
          title: 'Email không hợp lệ'
        })
      }else{
        var idLTK= $("#selectLTKEdit option:selected").val();
        if(idLTK==0){
          Swal.fire({
            icon:'question',
            text: 'Bạn muốn thay đổi thông tin tài khoản',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Đúng',
            denyButtonText: `Không`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              $.ajax({
                type: "post",
                url: "http://127.0.0.1:3000/api/editUser",
                data: {
                  id:id,
                  email:email,
                },
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
                      window.location.reload()
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
                    }else if(response.message.email){
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
                        title: response.message.email
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
              $("#EditModal").modal('hide');
            }
          })
        }else{
          Swal.fire({
            icon:'question',
            text: 'Bạn muốn thay đổi thông tin tài khoản',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Đúng',
            denyButtonText: `Không`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              $.ajax({
                type: "post",
                url: "http://127.0.0.1:3000/api/editUser",
                data: {
                  id:id,
                  email:email,
                  idLTK:idLTK,
                },
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
                      window.location.reload()
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
                    }else if(response.message.email){
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
                        title: response.message.email
                      })
                    }else if(response.message.idLTK){
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
                        title: response.message.idLTK
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
              $("#EditModal").modal('hide');

            }
          })
        }
      }
    });
    $('#newEmail').keyup(function (e) { 
      var email =$("#newEmail").val().trim();
      if(e.which===13){
        if(email==''){
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
            title: 'Bạn chưa nhập email'
          })
        }else if(!email.match(/(.+)@(gmail+)\.(com)/i)&&!email.match(/(.+)@(fpt.edu+)\.(vn)/i)){
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
            title: 'Email không hợp lệ'
          })
        }else{
          var idLTK= $("#selectLTKEdit option:selected").val();
          if(idLTK==0){
            Swal.fire({
              icon:'question',
              text: 'Bạn muốn thay đổi thông tin tài khoản',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Đúng',
              denyButtonText: `Không`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                $.ajax({
                  type: "post",
                  url: "http://127.0.0.1:3000/api/editUser",
                  data: {
                    id:id,
                    email:email,
                  },
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
                        window.location.reload()
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
                      }else if(response.message.email){
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
                          title: response.message.email
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
                $("#EditModal").modal('hide');
              }
            })
          }else{
            Swal.fire({
              icon:'question',
              text: 'Bạn muốn thay đổi thông tin tài khoản',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Đúng',
              denyButtonText: `Không`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                $.ajax({
                  type: "post",
                  url: "http://127.0.0.1:3000/api/editUser",
                  data: {
                    id:id,
                    email:email,
                    idLTK:idLTK,
                  },
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
                        window.location.reload()
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
                      }else if(response.message.email){
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
                          title: response.message.email
                        })
                      }else if(response.message.idLTK){
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
                          title: response.message.idLTK
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
                $("#EditModal").modal('hide');

              }
            })
          }
        }
      }
    });
  });
}
// =====================================
function themTK(){
      $("#addUserSubmit").click(function (e) { 
        e.preventDefault();
        var username = $("#username").val().trim();
        var useremail = $("#useremail").val().trim();
        var idROle = $("#selectLTK option:selected").val();
        if(username==''){
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
            title: 'Thiếu tên người dùng'
          })
        }else if(useremail==''){
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
            title: 'Thiếu email người dùng'
          })
        }else if(!useremail.match(/(.+)@(gmail+)\.(com)/i)&&!useremail.match(/(.+)@(fpt.edu+)\.(vn)/i)){
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
            title: 'Email không hợp lệ'
          })
        }else if(idROle==0){
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
            title: 'Chưa chọn loại tài khoản'
          })
        }else{
          $.ajax({
            type: "post",
            url: "http://127.0.0.1:3000/api/addUser",
            data: {
              name:username,
              email:useremail,
              role:idROle
            },
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
                    title: 'Đã thêm thành công'
                  }).then(()=>{
                    window.location.reload();
                  })
                }else if(response.check==false){
                  if(response.message.name){
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
                      title: response.message.name
                    })
                  }else if(response.message.email){
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
                      title: response.message.email
                    })
                  }else if(response.message.role){
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
                      title: response.message.role
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
        }

      });
}
// =====================================

function themLoaiTK(){
    $("#bntsubmit").click(function (e) { 
        e.preventDefault();
        var themloaitk=$("#themloaitk").val().trim();
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:3000/api/them",
            data: {name:themloaitk},
            dataType: "JSON",
            success: function (response) {
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
                    title: 'Thêm Thành Công'
                  })
                  
                  
            }
        });
        
    });
}

// =====================================

function switchUser(){
  $(".taikhoanstt").click(function (e) { 
    e.preventDefault();
    var id =$(this).attr('data-id');
    Swal.fire({
      title: 'Are you sure?',
      text: "Bạn muốn chuyển tình trạng tài khoản",
      icon: 'question',
      showCancelButton: false,
      showDenyButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đúng!',
      DenyButtonText: 'Không!',
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          type: "post",
          url: "http://127.0.0.1:3000/api/switchUser",
          data: {id:id},
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
                title: 'Chuyển đổi thành công'
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
                  title:response.message.id
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
      }else if (result.isDenied) {
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
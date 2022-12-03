
$(document).ready(function(){

    taikhoanmoi();

});

function taikhoanmoi(){
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
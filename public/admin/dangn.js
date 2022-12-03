
$(document).ready(function(){

    dangn();

});

function dangn(){
    $("#bntsubmitd").click(function (e) { 
        e.preventDefault();
        var dangntk=$("#dangntk").val().trim();
        
        // $.ajax({
        //     type: "post",
        //     url: "http://127.0.0.1:3000/api/dang",
        //     data: {email:dangntk},
        //     dataType: "JSON",
        //     success: function (response) {
        //         const Toast = Swal.mixin({
        //             toast: true,
        //             position: 'top-end',
        //             showConfirmButton: false,
        //             timer: 3000,
        //             timerProgressBar: true,
        //             didOpen: (toast) => {
        //               toast.addEventListener('mouseenter', Swal.stopTimer)
        //               toast.addEventListener('mouseleave', Swal.resumeTimer)
        //             }
        //           })
                  
        //           Toast.fire({
        //             icon: 'success',
        //             title: 'Nhập Thành Công'
        //           })
                  
                  
        //     }
        // });
        
    });
}
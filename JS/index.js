$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
    $("#btn2").click(function(){
        $("#myModal").modal();
    });
    // ----------- Kiểm tra tên -----------
    function KTTen() {
        var kt = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không được để trống");
            return false;
        } 
        if (!kt.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return false;
        }
        $("#tbName").html("*");
        return true;
    };
    $("#Name").blur(KTTen);

    // ------------------- Kiểm tra số CMND cũ ------------
    function KTCMND() {
        var scmnd = /^(\d{3})(\d{3})(\d{3})$/;
        if($("#CMND").val()==""){
            $("#tbCMND").html("Không được để trống");
            return false;

        }
        if(!scmnd.test($("#CMND").val())){
            $("#tbCMND").html("Nhập sai, chỉ được nhập 9 số.");
            return false;
        }
        $("#tbCMND").html("*");
        return true;
    }
    $("#CMND").blur(KTCMND);

    // ------------------- Kiểm tra quê quán--------------
    function kiemtradiachi(){
        var maukt = /^[A-Z0-9]*(\s[A-Z0-9]*)*$/;
        if($("#DC").val() == ""){
            $("#tbDC").html("Không được để trống");
            return false;
        }
        if(!maukt.test($("#DC").val())){
            $("#tbDC").html("Dùng chữ hoa");
            return false;
        }
        $("#tbDC").html("*");
        return true;
    }
    $("#DC").blur(kiemtradiachi);

    // ------ Kiểm tra Mail --------
    function KTMail(){
        var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if($("#Email").val()==""){
            $("#tbEmail").html("*bat buoc nhap");
            return false;
        }
        if(!mail.test($("#Email").val())){
            $("#tbEmail").html("*Nhập đúng kiểu mẫu: xxxxxx@iuh.edu.vn");
            return false;

        }
        $("#tbEmail").html("*");
        return true;
        }
        $("#Email").blur(KTMail);


    
    // ---------------- Kiểm tra số điện thoại ---------------
    function KTSDT(){
        
        var sdt = /^0(\d{2})(\d{3})(\d{4})$/;
        if($("#SDT").val()==""){
            $("#tbSDT").html("Không được để trống");
            return false;

        }
        if(!sdt.test($("#SDT").val())){
            $("#tbSDT").html("Nhập theo dạng: 0xx-xxx-xxxx trong đó x là số");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
        };
        $("#SDT").blur(KTSDT);
    

    // ------------------ lưu ----------------

    $("#save").click(function(){
        if(KTTen() == true && KTCMND() == true
            && kiemtradiachi() == true && KTMail() == true
            && KTSDT() == true){
                row = "<tr>";
                row += "<th>" + (i++) + "</th>";
                row += "<th>" + $("#Name").val() + "</th>";
                row += "<th>" + $("#CMND").val() + "</th>";
                row += "<th>" + $("#DC").val() + "</th>";
                row += "<th>" + $("#Email").val() + "</th>";
                row += "<th>" + $("#SDT").val() + "</th>";
                row += "<th>" + $("#ADD").val() + "</th>";
                $("#danhsach").append(row);
                $("#myModal").modal("hide");
        }
    })

});
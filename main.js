
function kiemtra(){
    var ht=window.document.dangky.txthoten.value;
    var na=window.document.dangky.nam.value;
    var email=window.document.dangky.em.value;
    var tdn=window.document.dangky.tdn.value;
    var mk=window.document.dangky.mk.value;
    var nlmk=window.document.dangky.nlmk.value;

    if(ht.length==0){
        alert("vui lòng nhập họ ten");
        window.document.dangky.txthoten.focus();
        return false;
    }

    if(na.length==0){
        alert("hãy điền năm sinh"); window.document.dangky.nam.focus();
        return false;
    }

    if(isNaN(na)==true){
        alert("Day khong phai la so");
        window.document.dangky.nam.value="";
        document.dangky.nam.focus();
        return false;
    }

    re=/\w+@\w+\.\w+/;
    if (email==""){
        alert("Bạn chưa nhập email") ;
        window.document.dangky.em.value="";
        document.dangky.em.focus(); return false
    }

    else if(re.test(email)==false){
        alert("Email không đúng định dạng!");
        document.dangky.em.focus();
        return false
    }

    if(tdn.length==0){
        alert("hãy điền tên đăng nhập");
        window.document.dangky.tdn.focus();
    return false;
    }

    if(mk.length==0){
        alert("hãy nhập mật khẩu");
        window.document.dangky.mk.focus();
    return false;
    }
    
    if(nlmk.length==0) {
        alert("hãy nhập lại mật khẩu"); 
        window.document.dangky.nlmk.focus();
    return false;
    }

    if(mk != nlmk){
        alert("mật khẩu và nhập lại mật khẩu ko trùng nhau");
        window.document.dangky.nlmk.focus();
    return false;
    }


    alert("Đăng ký thành công! Chúc mừng bạn");
    return true;
}
    document.getElementById("dangky").onclick= function( ) {
        kiemtra()
    }
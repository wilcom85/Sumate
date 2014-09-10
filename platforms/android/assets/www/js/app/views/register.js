var model = new com.inventakus.model.User();


$(document).ready(function() {
    $("#register-message").hide();
    $("#content-register").show();
    $("#btn_register").click(registeredUser);
    $("#btn_backlogin").click(function() {
        location.href = "index.html";
    });
    $("#btn_backlogin_m").click(function() {
        location.href = "index.html";
    });
});

function registeredUser(){
    var dto = {};
    dto.Users = {};

    var fullName = $("input#fullName").val();
    var email = $("input#email").val();
    var pass = $("input#pass1").val();
    var cellphone = $("input#cellphone").val();

    dto.Users.full_name = fullName;
    dto.Users.email = email;
    dto.Users.md5_password = MD5(pass);
    dto.Users.cellphone = cellphone;

    if(fullName && email && pass && cellphone){
        model.create(dto, registerCallback);
    }
}

function registerCallback(){
    $("input#fullName").val("");
    $("input#email").val("");
    $("input#pass1").val("");
    $("input#cellphone").val("");
    $("#content-register").hide();
    $("#register-message").show();
}
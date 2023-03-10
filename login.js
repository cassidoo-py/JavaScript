$(function ($) {
    //邮箱验证，样式变化
    $("#email").focus(function () {
        //获取焦点时，需要将背景颜色和边框进行变化
        $(this).removeClass().addClass("login_content_input_Focus");
    }).blur(function () {
        $(this).removeClass().addClass("login_content_input");
    });
    //密码框的样式变化
    $("#pwd").focus(function () {
        $(this).removeClass().addClass("login_content_input_Focus");
    }).blur(function () {
        $(this).removeClass().addClass("login_content_input");
    });

    //提交事件，对邮箱和密码进行判空
    $(".login_btn_out").click(function () {
        var email = $("#email").val();
        var pwd = $("#pwd").val();
        if (email == "") {
            alert("请输入email地址或昵称");
            return false;
        }
        if (pwd == "") {
            alert("密码不能为空");
            return false;
        }
    })
  
    //登录按钮变色
    $("#btn").mouseover(function(){
        $(this).removeClass().addClass("login_btn_over");
    }).mouseout(function(){
        $(this).removeClass().addClass("login_btn_out");
    });
    //快速注册按钮变色
    $("#quick_register").mouseover(function(){
        $(this).removeClass().addClass("login_register_over");
    }).mouseout(function(){
        $(this).removeClass().addClass("login_register_out");
    }).click(function(){
        window.location.href="register.html";
    });
});


$(function () {
    //制作下拉菜单的显示与隐藏
    //1.事件源
    //2.触发的条件
    //3.完成的效果
    $("#menu").mouseover(function () {
        $("#dd_menu_top_down").stop(true, true).slideDown(1000);
    }).mouseout(function () {
        $("#dd_menu_top_down").stop(true, true).slideUp(1000);
    })
})
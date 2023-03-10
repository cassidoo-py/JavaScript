$(function () {
  //打开新窗口
  //window.open(新窗口的地址，新窗口的名称，新窗口的特征)
  window.open("open.html", "广告页面", "width=500,height=327,left=200,top=0,scrollbars=1");

  //随滚动条滚动的广告
  $(window).scroll(function () {
    var st = $(this).scrollTop() + 50;
    $("#right").css("top", st);
  });

  //关闭广告
  $("#dd_close").click(function () {
    $("#right").css("display", "none");
  });

  //轮播图片
  function changeImage() {
    //索引
    var index = 0;
    //判断是否需要停止的参数
    var stop = false;
    //获取所有图片li
    var $li = $("#content").find("#scroll_img").children("li");
    //获取区所有页码
    var $page = $("#content").find("#scroll_number").children("li");
    //让当前的页码显示为高亮
    $page.eq(index).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");


    //鼠标悬停时停止当前动画，显示当前广告页面
    $page.mouseover(function () {
      stop = true;
      //获取当前页码的索引
      $page.index($(this));
      $li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
      $(this).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");
    }).mouseout(function () {
      stop = false;
    });

    setInterval(function () {
      if (stop) {
        return;
      }
      index++;
      if (index >= $li.length) {
        index = 0;
      }
      $li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
      $page.eq(index).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");
    }, 3000);
  }
  changeImage();

  //电子书的放大效果
  $(".book ul img").mouseenter(function () {
    $(this).animate({ width: "110%" }, "fast");
  });
  $(".book ul img").mouseleave(function () {
    $(this).animate({ width: "80%" }, "fast");
  });


 //书讯快递垂直滚动效果
 function movedome(){
  var marginTop=0;
  var stop=false;

var timer=setInterval(function(){
   if (stop) return;
   //找到第一个li进行向上移动，直到全部移除后追加到ul的最后一个子元素

   $("#express").children("li").first().animate({"margin-top":marginTop--},0,function(){
       var $first=$(this);
       if (!$first.is(":animated")){
           if((-marginTop)>$first.height()){
               $first.css({"margin-top":0}).appendTo($("#express"));
               marginTop=0
           }
       }

});
},50);

$("#express").mouseover(function(){
stop=true;
}).mouseout(function(){
stop=false;
});

}
movedome();

//图书畅销榜tab切换
$(".tab ol li:first-of-type").mouseover(function(){
//当前选中的li背景为白色，无边框，显示的宽度为119px
$(this).css({"width":"119px","background":"#fff","border":"none"})
//没有被选中的li背景为#efefef,左和下边框显示，宽度为118px
$(".tab ol li:last-of-type").css({"background":"#efefef","border-left":"1px solid #ccc","border-bottom":"1px solid #ccc","width":"118px"});
//第一个ul显示
$(".tab ul:first-of-type").show();
//第二个ul隐藏
$(".tab ul:last-of-type").hide();
});
$(".tab ol li:last-of-type").mouseover(function(){
//当前选中的li背景为白色，无边框，显示的宽度为119px
$(this).css({"width":"119px","background":"#fff","border":"none"})
//没有被选中的li背景为#efefef,左和下边框显示，宽度为118px
$(".tab ol li:first-of-type").css({"background":"#efefef","border-right":"1px solid #ccc","border-bottom":"1px solid #ccc","width":"118px"});
//第一个ul隐藏
$(".tab ul:first-of-type").hide();
//第二个ul显示
$(".tab ul:last-of-type").show();
});

//控制图书畅销榜中li的鼠标悬停显示图文的效果
$(".tab ul li p").mouseenter(function(){
//当前p段落需要隐藏
$(this).hide();
//p段落后的dl需要显示
$(this).next().show();
//将除了当前这个p所在的li，其他所有的同辈li中的p都应该显示，所有的dl都应该隐藏
$(this).parent().siblings().children("p").show().end().children("dl").hide()
});
})
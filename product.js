$(function($){

    function productlist() {
    var list = new Array("科幻(513)", "武侠(574)", "中国当代小说(13880)"
        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"
        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"
        , "中国进现代小说(640)", "中国古典小说(1547)",
        "科幻(513)", "武侠(574)", "中国当代小说(13880)"
        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"
        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"
        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"
        , "中国进现代小说(640)", "中国古典小说(1547)",
        "科幻(513)", "武侠(574)", "中国当代小说(13880)"
        , "中国进现代小说(640)", "中国古典小说(1547)"
    );
    var html = [];
    $.each(list, function (i, n) {
        html.push("<li>.<a href='#' class='blue'>" + n + "</a> </li>")
    });
    $("#product_catList_class").html(html.join(""));
    };
    productlist();

    function bookList(){
        //创建一个数组，保存所有的图书信息
        var catalog=new Array();
        catalog[0]=["product_list_01.jpg","私募（首部披露资本博弈秘密的金融小说）",4,"郭现杰","花山文艺出版社","2009年08月","数年前，在一次股市的多、空之战中，以赵云狄、林康为首的私募基金―金鼎投资，和以王雨龙为首的私募基金，达成锁仓协议分食利益。殊料，以王雨龙为首的私募基金―鑫利投资背信弃义，导致金鼎投资惨败。以至...","13.10","59折","￥18.90","￥32.00"];
        catalog[1]=["product_list_02.jpg","圈子圈套.1.战局篇",4,"王强","清华大学出版社","2006年01月","虽然没有硝烟，却比战场更血腥；虽然并未战死，却比死亡更痛苦。 洪钧从一个底层的销售人员，成为一家著名的跨国公司的中国区代理首席代表，在即将被扶正，事业情感都志得意满的时候，掉入俞威设计的圈套，...","8.90","68折","￥19.10","￥28.00"];
        catalog[2]=["product_list_03.jpg","饕餮（最真实的商场高端博弈小说）",4,"韦帕","国际文化出版公司","2009年07月","北京，六百公里处，有宝地，233亩，土地价值2.5亿，总投资额近八亿，利润近三亿。　　项目吸引了众多北京房地产商目光，其中最贪婪的一道目光，来自顾忱。但顾忱，总资产不过千万！想拿项目，无异于“空手套...","8.40","74折","￥23.60","￥32.00"];
        catalog[3]=["product_list_04.jpg","圈子圈套 迷局篇2：职场商战三部曲",4,"王强","长江文艺出版社","2006年08月","《圈子圈套2・迷局篇》是“圈子圈套三部曲”的第二部。 职场风云再起。洪钧出任维西尔中国区总经理，他和俞威之间的较量又或明或暗地展开来，面对内部的纷争和商场上的尔虞我诈，他该如何出招……俞威依...","11.4","59折","￥16.60","￥28.00"];
        catalog[4]=["product_list_05.jpg","圈子圈套3.终局篇（附赠王强演讲光盘）",4,"王强","长江文艺出版社","2007年10月","本书全景展示了商场和职场的生死厮杀、巅峰对决。主人公的命运、项目结局、所有的爱恨情仇都在本书中揭开谜底。 再次陷入低谷的洪钧在内忧外患中不甘消沉，在职场上和自己的上司明争暗斗，在商场上则和夙...","13.10","59折","￥18.9","￥32.00"];

        var html="";
        //遍历数组，动态生成列表
        $.each(catalog,function(i,n){
            html+="<div class='product_storyList_content_left'><img src=images/"+n[0]+" alt='图书列表'/></div>";
            html+="<div class='product_storyList_content_right'><ul>";
            html+="<li class='product_storyList_content_dash'><a href='#' class='blue_14'>"+n[1]+"</a></li>";
            html+="<li>顾客评分:"; 
            for(var k=0;k<5;k++){
                if(k<n[2]){
                    html+="<img src='images/star_red.gif' alt='star'/>";
                }else{
                    html+="<img src='images/star_red2.gif' alt='star'/>";
                }
            }
            html+="</li>";
            html+="<li>作  者:<a href='#' class='blue_14'>"+n[3]+"</a> 著/<li>";
            html+="<li>出版社:<a href='#' class='blue_14'>"+n[4]+"</a><li>";
            html+="<li>出版时间:"+n[5]+"</li>";
            html+="<li>"+n[6]+"</li>";
            html+="<li><dl class='product_content_dd'>";
            html+="<dd><img src='images/product_buy_02.gif' alt='shopping'/></dd>";
            html+="<dd><img src='images/product_buy_01.gif' alt='shopping'/></dd>";
            html+="<dd>节省:￥"+n[7]+"</dd>";
            html+="<dd>折扣:<span>"+n[8]+"</span></dd>";
            html+="<dd class='footer_dull_red'><span>"+n[9]+"</span></dd>";
            html+="<dd class='product_content_delete'><span>"+n[10]+"</span></dd>";
            html+="</dl></li></ul></div>"
            html+="<div class='product_storyList_content_bottom'></div>"
        });
        $("#storyBooksssss").html(html);
    }
    bookList();

    //获取列表的内容，保存
    var arrayBookList=$("#product_storyList_content").html();

    //大图切换显示
    function getBigBookList(){
        var $initContent=$("#product_storyList_content");
        //获取列表中图书的图片所在div对象
        var $bookImg=$initContent.find(".product_storyList_content_left");
        var contents="";
        $initContent.find(".product_storyList_content_right").find("ul").each(function(i,ele){
            var div="";
            var content=[div,"<div class='big_img_list'><ul><li class='bookImg'>"+$($bookImg[i]).html()+"</li>"];
            //获取ul中的所有li，拿li中的内容
            var $li=$(ele).children("li");
            //第二行是价格
            //先获取原来列表中的价格
            var $price=$($li[6]).find("span");
            content.push("<li><dl><dd class='footer_dull_red'>"
                +$($price[1]).text()+"</dd><dd class='product_content_delet'>"
                +$($price[2]).text()+"</dd><dd class='footer_dull_red'>"
                +$($price[0]).text()+"</dd></dl></li>");//价格
            //简介
            content.push("<li class=''>"+$($li[5]).html()+"</li>");
            //作者
            content.push("<li class=''>"+$($li[2]).html()+"</li>");
            //顾客评分
            content.push("<li class=''>"+$($li[1]).html()+"</li>");
            //出版社
            content.push("<li class=''>"+$($li[3]).html()+"</li>");
            //出版时间
            content.push("<li class=''>"+$($li[4]).html()+"</li></ul></div>");
            contents += content.join("");
        });
        return contents;
    }
    //需要将大图中所有的内容保存
    var bigBookList= getBigBookList();

    //切换
    $("#product_array").children("a").click(function(){
        if($(this).is("[class='click']")) return;
        $(this).siblings().removeClass("click");
        $(this).addClass("click");
        //切换div中的内容
        if($(this).attr("name")=="array"){
            //列表
            $("#product_storyList_content").empty().html(arrayBookList);
        }else{
            $("#product_storyList_content").empty().html(bigBookList);
            //鼠标悬停事件
            $("#product_storyList_content").children(".big_img_list").find("ul").mouseover(function(){
                $(this).addClass("over");
                $(this).parent().addClass("over");
            }).mouseout(function(){
                $(this).removeClass("over");
                $(this).parent().removeClass("over");
            });

        }
    });
 })
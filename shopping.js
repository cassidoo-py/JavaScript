$(function($){
    //推荐图书部分，点击按钮实现推荐部分的显示和隐藏
    $("#shopping_commend_arrow").click(function(){
        //切换img的src图片
        if($("#shopping_commend_sort").css("display")=="none"){
            $(this).attr("src","images/shopping_arrow_up.gif");
        }else{
            $(this).attr("src","images/shopping_arrow_down.gif");
        }
        
        //切换div的显示和隐藏
        $("#shopping_commend_sort").toggle();

    });
    //lightcyan       #fefbf2
    //隔行变色
    $("#myTableProduct").find("tr:odd").css("backgroundColor","lightcyan");
    //选中某行时，需要将其背景变为白色。鼠标移开时变为原样
    $("#myTableProduct").find("tr").mouseover(function(){
        //背景切换白色
        $(this).css("backgroundColor","#fff");
    }).mouseout(function(){
        //判断当前行是奇数还是偶数行
        if($("#myTableProduct").find("tr").index($(this))%2==1){
            //奇数
            $(this).css("backgroundColor","lightcyan");
        }else{
            //偶数
            $(this).css("backgroundColor","#fefbf2");
        }
    });

    //计算总金额，优惠金额以及积分
    function totalPrice(){
        //积分，原价，现价
        var percents=0,prePrices=0,prices=0;
        //获取表格中所有的行，并遍历
        $("#myTableProduct").find("tr").each(function(i,ele){
            //数量
            var num=$(ele).find(".shopping_product_list_5").find("input").val();
            //计算积分
            percents+=parseInt($(ele).find(".shopping_product_list_2").text())*num;
            //现价
            var price = parseInt($(ele).find(".shopping_product_list_4").find("label").text().replace(".",""))*num;
            prices+=price;
            //原价
            var preprice = parseInt($(ele).find(".shopping_product_list_3").find("label").text().replace(".",""))*num;
            prePrices+=preprice;
        });
          //绑定积分
          $("#product_integral").text(percents);
          //绑定总金额
          $("#product_total").text(prices/100);
          //绑定节省的金额
          $("#product_save").text((prePrices-prices)/100);
          
          //返回总金额
          return prices/100;
    }
    totalPrice();

    //删除商品
    $("#myTableProduct").find(".shopping_product_list_6").children("a").click(function(){
        if(confirm("是否要进行删除商品?")){
            //删除
            $(this).parent().parent().remove();
            //重新计算当前的总价和积分
            totalPrice();
        }
    });
    
    //修改数量
    $("#myTableProduct").find(".shopping_product_list_5").children("input").change(function(){
    	//获取文本框中的值
    	var value =$(this).val();
    	//判断输入格式是否正确
    	if((value=="")||!(/^[0-9]*[1-9][0-9]*$/.test(value))){
    		alert("数量不能为空，且只能是正整数");
    		//将当前值设为默认为1
    		$(this).val(1);    		
    	}
    	//计算新的总金额，积分等
    	var t =totalPrice();
    	alert("修改成功，你的商品总金额为:"+t);
    });
    
    //清空购物车
    $("#removeAllProduct").click(function(){
    	//删除总金额所在的div
    	$("#myTableProduct").next().remove();
    	//删除表格
    	$("#myTableProduct").remove();
    	//追加内容
    	$(".shopping_list_border").append("<div class='empty_product'><div>您还没有挑选商品，<a href='index.html'>去挑选看看</a></div></div>");    	
    });
})
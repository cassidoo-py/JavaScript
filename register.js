$(function () {
	//表单的提交事件
	$("#registerBtn").click(function () {
		//电子邮箱
		var email = document.getElementById("email");
		if (email.validity.valueMissing == true) {
			email.setCustomValidity("邮箱不能为空");
		} else if (email.validity.typeMismatch == true) {
			email.setCustomValidity("邮箱格式不正确,例如web@qq.com")
		} else {
			email.setCustomValidity("");
		}
		//昵称
		var nickName = document.getElementById("nickName");
		if (nickName.validity.valueMissing == true) {
			nickName.setCustomValidity("昵称不能为空");
		} else if (nickName.validity.typeMismatch == true) {
			nickName.setCustomValidity("昵称必须是4-20为字母与数字")
		} else {
			nickName.setCustomValidity("");
		}
		//密码
		var pwd = document.getElementById("pwd");
		if (pwd.validity.valueMissing == true) {
			pwd.setCustomValidity("密码不能为空");
		} else if (pwd.validity.typeMismatch == true) {
			pwd.setCustomValidity("密码必须是6-20为字母与数字")
		} else {
			pwd.setCustomValidity("");
		}
		//再次确认密码
		var repwd = document.getElementById("repwd");
		if (repwd.value == pwd.value) {
			repwd.setCustomValidity("");
		} else {
			repwd.setCustomValidity("两次输入的密码不一致");
		}
	});

	//提交按钮的样式变化
	$("#registerBtn").mouseover(function () {
		$(this).attr("src", "images/register_btn_over.gif");
	}).mouseout(function () {
		$(this).attr("src", "images/register_btn_out.gif");
	});

	//省市级联
	var cityList = new Array();
	cityList['北京市'] = ['朝阳区', '东城区', '西城区', '海淀区', '宣武区', '丰台区', '怀柔', '延庆', '房山'];
	cityList['上海市'] = ['宝山区', '长宁区', '丰贤区', '虹口区', '黄浦区', '青浦区', '南汇区', '徐汇区', '卢湾区'];
	cityList['广州省'] = ['广州市', '惠州市', '汕头市', '珠海市', '佛山市', '中山市', '东莞市'];
	cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
	cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
	cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
	cityList['江苏省'] = ['南京市', '苏州市', '无锡市'];
	cityList['浙江省'] = ['杭州市', '宁波市', '温州市'];
	cityList['四川省'] = ['四川省', '成都市'];
	cityList['海南省'] = ['海口市'];
	cityList['福建省'] = ['福州市', '厦门市', '泉州市', '漳州市'];
	cityList['山东省'] = ['济南市', '青岛市', '烟台市'];
	cityList['江西省'] = ['江西省', '南昌市'];
	cityList['广西省'] = ['柳州市', '南宁市'];
	cityList['安徽省'] = ['安徽省', '合肥市'];
	cityList['河北省'] = ['邯郸市', '石家庄市'];

	//页面加载时，需要给省份下拉列表框添加内容
	$("#province").append(function () {
		var html = "";
		for (var i in cityList) {
			html += "<option value=" + i + ">" + i + "</option>"
		}
		return $(html);
	});
	//绑定选择框的内容改变事件
	$("#province").change(function () {
		//获取当前选中对象的value属性值
		var v = $(this).val();
		var html = ""
		if (v == "请选择省/城市") {
			html = "<option>请选择城市/地区</option>"
			$("#city").html(html);
			return;
		}
		//选择某一个省份
		var citys = cityList[v];
		$.each(citys, function (i, n) {
			html += "<option value=" + n + ">" + n + "</option>"
		});

		$("#city").html(html);
	});
})

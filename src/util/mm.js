'use strict'
var Hogan = require('hogan.js');
//$ <==> jquery 这里的ajax方法是	jquery自带的方法
var conf = {
	serverHost:''
}
var _mm = {
			
	request : function(param){
		//保存this，防止this之争指向不明
		var _this = this;
		$.ajax({
			type : param.method || 'get',
			url : param.url || '',
			dataType :param.type || 'json',
			data: param.data || '',
			//返回200，请求成功
			success: function(res){
				if (0 === res) {
					typeof param.success === 'function' && param.success(res.data,res.msg);
				}else if (10 ===res.status){
					//没有登陆状态，统一去登陆
					_this.doLogin();
				}else if (1===res.status){
					//报错
					typeof param.error === 'function' && param.error(res.msg);
				}
				 
			},
			//返回404 503
			error : function(err){
				typeof param.error === 'function' && param.error(err.statusTest);
			}
				
		});
	},
	//统一跳转到登录页面
	doLogin : function(err){
		window.location.href='./user-login.html?redirect=' + encodeURIComponent(window.location.href);	
		
	},
	getServerUrl: function(path){
		return conf.serverHost + path;
	},
	//获取Url参数
	//在上面的URL
	getUrlParam : function(name){
		var reg    = new RegExp('(^|&)' + name +'=([^&]*)(&|$)');
		var result = window.location.search.substr(1).match(reg);
		return result ? result[2] : null;
		//decodeURIComponent
	},
	//渲染html模板函数
	renderHtml:function(htmlTemplate,data){
		//Hogan编译模板
		var template =Hogan.compile(htmlTemplate);
		//Hogan渲染模板
		var result = template.render(data);
		//将渲染的结果返回
		return result;
	},
	//成功提示
	successTips: function(msg){
		alert(msg || '操作成功');
	},
	//错误提示
	errTips:function(msg){
		alert(msg || '操作失败');
	},
	validate:function(value,type){
		var value = $.trim(value);
		//非空验证
		if('require' === type){
			//将value值强转成Booleen类型
			return !!value;
		}
		//手机号验证
		if('phone' === type){
			return /^1\d{10}$/.test(value);
		}
		//邮箱验证
		if('email' === type){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
		}
	},

};
module.exports = _mm; //这导出，其他地方导入不导出无法导入
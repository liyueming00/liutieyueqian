//通过require请求加载
require('./index.css');

require('@/common/nav-simple/index.js');
require('@/common/nav/index.js');
require('@/common/header/index.js');
var navSide = require('@/common/nav-side/index.js');

var _mm= require('util/mm.js');

//测试个人中心页
navSide.init({
	name: 'user-center'
});

//=================
// alert(456);
/*_mm.request({
	url: '/test.do',//错误接口
	success: function(res){
		console.log("这是我们从网络接口中获取的数据：",res);
	},
	error: function(errMsg){
		console.log('这是请求错误：',errMsg);
	}
});*/
//==================
//console.log(_mm.getUrlParam('page'));

// var html ='<div>{{data}}</div>';
// var data ={
// 	data: 123
// }
// console.log(_mm.renderHtml(html,data));

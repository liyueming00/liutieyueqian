'use strict'
require('./index.css');

var _mm = require('util/mm.js');
var templateIndex = require('./index.string');

//侧边导航
var navSide = {
	option:{
		name:'',
		//待动态渲染的项
		navList:[
		{
			name:'user-center',
			desc:'个人中心',
			href:'./user-center.html'
		},
		{
			name:'order-list',
			desc:'我的订单',
			href:'./user-center.html'
		},
		{
			name:'user-pass-update',
			desc:'修改密码',
			href:'./user-center.html'
		},
		{
			name:'about',
			desc:'关于TMALL',
			href:'about.html'
		}
		]
	},
	init: function(option){
		$.extend(this.option,option);
		//开始渲染
		this.renderNav();
	},
	//渲染导航菜单（要判断哪一项是active）
	renderNav:function(){
		//计算active数据
		for (var i = 0 , ilength = this.option.navList.length; i < ilength; i++) {
			if(this.option.navList[i].name === this.option.name 

		){
				this.option.navList[i].isActive = true;  //临时添加isActive属性
			}
		}
		var navHtml = _mm.renderHtml(templateIndex,{
			navList:this.option.navList
		});
		$('.nav-side').html(navHtml);

	}
}
module.exports = navSide;
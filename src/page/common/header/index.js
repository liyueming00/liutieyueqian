'use strict'
require('./index.css');

var _mm = require('util/mm.js');
//通用页面头部
var header = {
	init: function(){
		this.onload();
		this.bindEvent();
	},
	//绑定事件的方法
	bindEvent:function(){
		var _this=this;
		$('.search-btn').click(function(){
			_this.searchSubmit();
		})
		//输入“回车”的时候做搜索提交 e表示event 事件对象
		$('.search-input').keyup(function(e){
			if(e.keyCode === 13){
				//也做搜索提交
				_this.searchSubmit();
			}
		});
	},
	//加载方法
	onload:function(){
		var keyword = _mm.getUrlParam('keyword');
		//如果word存在，则回填至输入框
		if(keyword){
			//在输入框中显示当前搜索的词汇keyword
			$('.search-input').val(keyword);
		}
	},
	//实现搜索提交的方法
	searchSubmit:function(){
		//对关键字的处理
		var keyword = $.trim($('#search-btn').val());
		//如果提交的时候有关键字keyword,跳转到list页
		if(keyword){
			
			window.location.href ='./list.html?keyword='+keyword;
		}else{
			//如果keyword为空，直接返回首页
			_mm.goHome();
		}
	}
}
header.init();
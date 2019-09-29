'use strict'

var _mm =require('util/mm.js');

var _user ={
	// 登出
	logout: function(resolve,reject){
		_mm.request({
			url: _mm.getServerUrl('/user/logout.do'),
			method: 'POST',
			success: resolve,
			error: reject,
		})
	},
	//核对用户信息
	checkLogin: function(resolve,reject){
		_mm.request({
			url: _mm.getServerUrl('/user/get_user_info.do'),
			method: 'POST',
			success: resolve,
			error: reject,
		})
	},
	//登录 中间件
	//从客户端的form表中获取userInfo提交到服务器进行验证
	//如果验证通过，则执行resolve回调函数；如果没通过，执行
	//reject回调函数
	login: function(userInfo,resolve,reject){
		_mm.request({
			url: _mm.getServerUrl('/user/login.do'),
			method: 'POST',
			data:userInfo,
			success: resolve,
			error: reject
		})
	}
}
module.exports = _user;
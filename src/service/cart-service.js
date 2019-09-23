'use strict'

var _mm =require('util/mm.js');

var _cart ={
	// 登出
	getCartCount: function(resolve,reject){
		_mm.require({
			url: _mm.getServerUrl('cart/get_cart_product_count.do'),
			//如果没有指定POST，则默认使用GTE的请求方式
			success: resolve,
			error: reject,
		})
	}
}
module.exports = _cart;
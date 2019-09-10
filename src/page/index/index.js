//通过require请求加载
var cats = require('./cats.js');
var common = require('../common.js');
require('./index.css');
//$<==>jquery
common();


console.log(cats);
$('body').html('羊驼不是草泥马');
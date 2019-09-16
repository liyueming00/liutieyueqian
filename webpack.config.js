//请求Node提供的path模块
//path有一个方法：resolve(参数1，参数2)
//参数1：_dirname表示当前目录的路径
//参数2：需要追加的目录名，不需要写/，resolve方法会帮我们自动化给追加
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

var getHtmlConfig = function(name){
	return {
		//对哪个html进行打包
			template:'./src/view/'+ name +'.html',
			//打包以后的路径和文件
			filename:'view/'+ name +'.html',
			//自动注入
			inject:true,
			//哈希值
			hash:true,
			//有哪些打包后的js文件需要被注入到html中
			chunks:['common',name]
	}
}

var config = {
	entry: {
		'index':'./src/page/index/index.js',
		'user-login':'./src/page/user-login/index.js',
		'common':['./src/page/common/index.js']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist',
		filename: 'js/[name].js'
	},
	externals:{
		'jquery' : 'window.jQuery'
	},
	//webpack4的新写法
	/*optimization:{
		splitChunks:{
			cacheGroups:{
				commons:{
					name:'base',
					chunks:'initial',
					minChunks:2,
					minSize:0
				}
			}		
		}
	},*/
	module:{
		rules:
		[
			{
				test : /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use:"css-loader"
					//loader: "style-loader!css-loader"
				})
				
			},
			{
				test : /\.(gif|png|jpg|woff|svg|eot|ttf).??.*$/,
				loader:'url-loader?limit=100&name=resource/[name].[ext]'
					
			}
		]
		
			
		
	},
	plugins:[
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('user-login'))
		]
		
	
}

if('dev'===WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088')
}


module.exports = config;

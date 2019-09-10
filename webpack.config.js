//请求Node提供的path模块
//path有一个方法：resolve(参数1，参数2)
//参数1：_dirname表示当前目录的路径
//参数2：需要追加的目录名，不需要写/，resolve方法会帮我们自动化给追加
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: {
		'index':'./src/page/index/index.js',
		'login':'./src/page/login/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
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
				
			}
		]
		
			
		
	},
	plugins:[
		new ExtractTextPlugin("css/[name].css")
		]
		
	
}
module.exports = config;

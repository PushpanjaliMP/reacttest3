var webpack = require('webpack'),
path = require('path');

var target = {
	devtool:'inline-source-map',
	entry: [
	'webpack-hot-middleware/client',
	'./client/client.js'],
	output: {
		path: require("path").resolve('./dist'),
		//path:__dirname+'/dist',
		filename:'bundle.js',
		publicPath:'/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders:[
		{
			test:/\.js$/,
			loader:'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['react','es2015','react-hmre']
			}
		}
		]
	}
};

module.exports = target;

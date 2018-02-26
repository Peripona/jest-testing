const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
  	app: './src/index.js',
  },
  output: {
  	filename: '[name].bundle.js',
  	path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
  	rules: [
	  	{
	  		test: /\.css$/,
	  		use: [
	  		  'style-loader',
	  		  'css-loader',
	  		]
	  	},
	  	{
	  		test: /\.(png|jpg|svg|gif)$/,
	  		use: [
	  			'file-loader',
	  		]
	  	},
	  	{
	  		test: /\.(woff|woff2|eot|ttf|otf)$/,
	  		use: [
	  			'file-loader',
	  		],
	  	}
  	]
  },
  plugins: [
    new CleanWebpackPlugin([
    		'dist',
    	]),
  	new HtmlWebpackPlugin({
  		title: 'Jest Testing Setup',
  		template: './src/index.html',
  	})
  ]
}
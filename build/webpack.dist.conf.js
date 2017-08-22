
var webpack = require('webpack');

module.exports = {
	'entry' : './src/index',
	'output': {
		'path'         : './dist',
		'library'      : 'Observer',
		'filename'     : 'Observer.js',
		'libraryTarget': 'umd'
	},
	'plugins': [
		new webpack.optimize.UglifyJsPlugin({
			'compress': {
				'warnings': false
			}
		})
	]
}